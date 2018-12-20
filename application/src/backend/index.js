// express router. Api endpoints defined here.
const express = require('express');
const app = express();
const mysql = require('mysql');
//TODO change for production
const port = 8888;


//serve static assets - built and copied in by docker
app.use('/static', express.static('static'));

app.get('/', function(req, res){
  res.redirect('static');
});


//Route definitions
app.get('/getKanbanStages', function(req, res){
    //TODO take out. just for development
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.json([
      {
        ID: 0,
        name: "Listed",
        color: "#FF00FF"
      },
      {
        ID: 1,
        name: "Renovating",
        color: "#435234"
      },
      {
        ID: 2,
        name: "Leased",
        color: "#0000FF"
      },
    ]);
});

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