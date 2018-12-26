// express router. Api endpoints defined here.
const express = require('express');
const app = express();
const mysql = require('mysql');
//TODO change for production
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
app.get('/', function(req, res){
  res.redirect('static');
});
app.use('/static', express.static('static'));


app.get('/testmysql', function(req,res){
  dbConnectionPool.query("SELECT * FROM properties", function(error, results, fields){
    if(error){
      throw error;
    }
    console.log(results);
    console.log(fields);
  });
})


//Route definitions
app.get('/getKanbanStages', function(req, res){
    //TODO take out. just for development
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    dbConnectionPool.query("SELECT * FROM stages ORDER BY ordering_ID", function(error, results, fields){
      res.send(results);
    });
});

function pullBuildium(){
  
}

app.get('/getPropertySummaries', function(req, res){
  //TODO take out. just for development
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  console.log(req.query);
    res.json([
        {
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
              {num: 1, stageID: 1}
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
              {num: 1, stageID: 2},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },{
            title: "221B Baker St. London, England",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            currentRentRoll: "4000",
            units: [
              {num: 2, stageID: 0},
            ],
          },
        ]);
});



//start server
app.listen(port);