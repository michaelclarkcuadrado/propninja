// express router. Api endpoints defined here.
const express = require('express');
const api = express();
const mysql = require('mysql');
const port = 8888;
const dbHostname = "database-server";
const dbUser = "root";
const dbPassword = "zoopydoopy";
const dbName = "spg-propninja";

const dbConnectionPool = mysql.createPool({
  connectionLimit: 5,
  host: dbHostname,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  nestTables: '_',
  multipleStatements: true,
});

// serve static assets - webpack'd and copied in by docker
api.get('/', function (req, res) {
  res.redirect('static');
});
api.use('/static', express.static('static'));

// TODO remove for deployment. Set CORS headers for dev environment.
var setCORS = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
};
api.use(setCORS);
// END TODO

//Route definitions

/*
  Returns names and IDs for the various user-definable properties an object may have.
*/
api.get('/getEnumTypes', function (req, res) {
  let sqlQuery = `
    SELECT stage_ID as ID, ordering_ID, stage_Name, hex_Color FROM stages ORDER BY ordering_ID;
    SELECT deal_Type_ID as ID, deal_Type_Name FROM deal_Types;
    SELECT lender_ID as ID, lender_Name FROM lenders;
    SELECT loan_Type_ID as ID, loan_Type_Name FROM loan_Types;
    SELECT propClass_ID as ID, propClass_Name FROM property_Classes;
    SELECT property_Type_ID as ID, property_Type_Name FROM property_Types;
    SELECT unit_Type_ID as ID, unit_Type_Name FROM unit_Types;
    `;
  dbConnectionPool.query(sqlQuery, function (error, results, fields) {
    let labels = [
      'property_stages',
      'deal_types',
      'lenders',
      'loan_types',
      'prop_classes',
      'prop_types',
      'unit_types',
    ];
    let resultObj = {};
    //create objects where the ID is key for fast lookups
    for (let i = 0; i < results.length; i++) {
        let tempObj = {};
        for (let j = 0; j < results[i].length; j++) {
          tempObj[results[i][j].ID] = results[i][j];
        }
        resultObj[labels[i]] = tempObj;
    }
    res.json(resultObj);
  });
});

/*
  Returns summaryObjs that are consumed by PropertySummaryCards. Bird's eye view of property data
  possible options are: lastSeen for pagination, ordering, inverted(asc to dsc), and/or a search term sent by GET params
*/
api.get('/getPropertySummaries', function (req, res) {
  if (Object.keys(req.query).length !== 4) {
    throw new Error("Required parameters not received.");
  }

  let sortingModes = [ // this must be kept in sync with 'supported modes' in PropertySummaryView
    'num_Units',
    'current_Value',
    'current_Debt',
    'currentRentRoll'
  ];

  let sqlQuery =
    `SELECT prop_ID, 
         prop_address, 
         current_Debt, 
         current_Value, 
         COUNT(unit_ID) as num_Units, 
         GROUP_CONCAT(curr_Stage_ID) as unit_Stages,
         IFNULL(SUM(rent_Roll), 0) as 'currentRentRoll'
         FROM properties
         LEFT JOIN prop_Units pU on properties.prop_ID = pU.belongs_To_PropID
         WHERE prop_address LIKE ?
         GROUP BY prop_ID
         ORDER BY ?? ` + (req.query.inverted == '0' ? ' DESC ' : ' ASC ') + `
         LIMIT 25 OFFSET ?
         `

  let sqlParams = [
    '%' + req.query.search + '%',
    (sortingModes[req.query.ordering]),
    Number(req.query.lastSeen),
  ];
  dbConnectionPool.query(sqlQuery, sqlParams, function (error, propertyResults) {
    if (error) {
      throw error;
    }
    //get mapping of stageID to ordering ID to sort 
    dbConnectionPool.query("SELECT stage_ID, ordering_ID from stages", function (error, stageResults) {
      if (error) {
        throw error;
      }
      let stageMap = {};
      for (row in stageResults) {
        stageMap[stageResults[row].stage_ID] = stageResults[row].ordering_ID;
      }
      //collate rows into objects with a unified 'units' property. 
      //Group_concat was necessary to be able to sort entries on database side
      for (let i = 0; i < propertyResults.length; i++) {
        let unitsObjs = {};
        if (propertyResults[i].unit_Stages !== null) {
          propertyResults[i].unit_Stages.split(',').forEach(function (stageID) {
            if (stageID in unitsObjs) {
              unitsObjs[stageID].num++;
            } else {
              unitsObjs[stageID] = { num: 1, stageID: stageID }
            }
          });
        }
        propertyResults[i]['units'] = Object.values(unitsObjs);
        propertyResults[i]['units'].sort((a, b) => stageMap[a.stageID] - stageMap[b.stageID]);
        delete propertyResults[i].unit_IDs;
        delete propertyResults[i].unit_Stages;
      }
      res.json(propertyResults);
    });
  });
});


/*
  Returns all the information held about a property and its units. For the PropertyDetailDialog.
  requires a Prop_ID as query.
*/
api.get('/getPropertyDetail', function (req, res) {
  let sqlQuery = `
  SELECT prop_ID,
  prop_address,
  purchase_Date,
  purchase_Price,
  deal_Type_ID,
  owning_Entity,
  propClass_ID,
  gross_sqft,
  year_Built,
  tax_Assessment,
  yearly_Tax,
  yearly_Insurance,
  refinance_Date,
  lender_ID,
  loan_Type_ID,
  loan_Acct_Number,
  loan_Payment_Day,
  monthly_Loan_Payment_Total,
  monthly_Loan_Payment_Interest,
  monthly_Loan_Payment_Principal,
  current_Debt,
  current_Value,
  last_Updated_Buildium,
  last_Updated_QBO,
  property_Type_ID,
  GROUP_CONCAT(unit_ID ORDER BY unit_ID SEPARATOR '!####!') AS unit_ID,
  GROUP_CONCAT(unit_sqft ORDER BY unit_ID SEPARATOR '!####!') AS unit_sqft,
  GROUP_CONCAT(unit_Name ORDER BY unit_ID SEPARATOR '!####!') AS unit_Name,
  GROUP_CONCAT(rent_Roll ORDER BY unit_ID SEPARATOR '!####!') AS rent_Roll,
  GROUP_CONCAT(curr_Stage_ID ORDER BY unit_ID SEPARATOR '!####!') AS curr_Stage_ID,
  GROUP_CONCAT(unit_Type_ID ORDER BY unit_ID SEPARATOR '!####!') AS unit_Type_ID,
  GROUP_CONCAT(0 SEPARATOR '!####!') as is_Being_Edited
from properties
  LEFT JOIN prop_Units pU on properties.prop_ID = pU.belongs_To_PropID
  WHERE prop_ID = ?
GROUP by prop_ID
  `;
  let sqlParams = [req.query.propID];
  dbConnectionPool.query(sqlQuery, sqlParams, function (error, results, fields) {
    if (error) {
      throw error;
    }
    //split concat'd unit details and pivot into individual objects
    let unitDetailNames = ['unit_ID', 'unit_sqft', 'unit_Name', 'rent_Roll', 'curr_Stage_ID', 'unit_Type_ID', 'is_Being_Edited'];
      results = results[0]; // only a single row is returned.
      let unitDetailsObj = {};
      for(let i = 0; i < unitDetailNames.length; i++){
        unitDetailsObj[unitDetailNames[i]] = results[unitDetailNames[i]].split("!####!");
        delete(results[unitDetailNames[i]]);
      }
      let numUnits = unitDetailsObj[Object.keys(unitDetailsObj)[0]].length;
      let units = [];
      for(let i = 0; i < numUnits; i++){
        let unit = {};
        for(let j = 0; j < unitDetailNames.length; j++){
          unit[unitDetailNames[j]] = unitDetailsObj[unitDetailNames[j]][i];
        }
        units.push(unit);
      }
      results['units'] = units;
    res.json(results);
  });
});

//start server
api.listen(port);