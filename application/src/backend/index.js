// express router. Api endpoints defined here.
const express = require('express');
const app = express();
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
});

//serve static assets - webpack'd and copied in by docker
app.get('/', function (req, res) {
  res.redirect('static');
});
app.use('/static', express.static('static'));

//Route definitions

/*
  Returns a list of all the stages that a unit can possibly be in.
*/
app.get('/getKanbanStages', function (req, res) {
  //TODO take out. just for development
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  dbConnectionPool.query("SELECT * FROM stages ORDER BY ordering_ID", function (error, results, fields) {
    let stagesObj = {};
    for (let i = 0; i < results.length; i++) {
      stagesObj[results[i].stage_ID] = results[i];
    }
    res.json(stagesObj);
  });
});

/*
  Returns summaryObjs that are consumed by PropertySummaryCards. Bird's eye view of property data
  possible options are: lastSeen for pagination, ordering, inverted(asc to dsc), and/or a search term sent by GET params
*/
app.get('/getPropertySummaries', function (req, res) {
  //TODO take out. just for development
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  console.log(req.query);

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

//start server
app.listen(port);