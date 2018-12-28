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
var setCORS = function(req, res, next){
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  next();
};
api.use(setCORS);
// END TODO

//Route definitions

/*
  Returns a list of all the stages available.
*/
api.get('/getKanbanStages', function (req, res) {
  let sqlQuery = `SELECT stage_ID, ordering_ID, stage_Name, hex_Color FROM stages ORDER BY ordering_ID`;
  dbConnectionPool.query(sqlQuery, function (error, results, fields) {
    let stagesObj = {};
    for (let i = 0; i < results.length; i++) {
      stagesObj[results[i].stage_ID] = results[i];
    }
    res.json(stagesObj);
  });
});

/*
  Returns names and IDs for the various user-definable properties an object may have.
  Kanban stages / tasklist not handled here.
*/
api.get('/getEnumTypes', function (req,res){
    let sqlQuery = `
    SELECT deal_Type_ID, deal_Type_Name FROM deal_Types;
    SELECT lender_ID, lender_Name FROM lenders;
    SELECT loan_Type_ID, loan_Type_Name FROM loan_Types;
    SELECT propClass_ID, propClass_Name FROM property_Classes;
    SELECT property_Type_ID, property_Type_Name FROM property_Types;
    SELECT unit_Type_ID, unit_Type_Name FROM unit_Types;
    `;
    dbConnectionPool.query(sqlQuery, function(error, results, fields){
      let labels = [];
      for(let i = 0; i < results.length; i++){
        
      }
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
      for(row in stageResults){
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
        propertyResults[i]['units'].sort((a,b) => stageMap[a.stageID] - stageMap[b.stageID]);
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
api.get('/getPropertyDetail', function(req, res){
  let sqlQuery = `

  `;
  let sqlParams = [];
  dbConnectionPool.query(sqlQuery, sqlParams, function(error, results, fields){
    if(error){
      throw error;
    }

    
  });
});

//start server
api.listen(port);