// express router. Api endpoints defined here.
const express = require('express');
const app = express();
const mysql = require('mysql');
//TODO change for production
const port = 8888;


//serve static assets - built and copied in by docker
app.use('/static', express.static('static'));


//Route definitions
app.get('/getKanbanStages', function(req, res){
    res.json([
      {
        ID: 0,
        name: "Under Contract",
        color: "#FFFFFF"
      }
    ]);
});

app.get('/getPropertySummaries', function(req, res){
  //TODO take out. just for development
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  console.log("API HIT!")
    res.json([
        {
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },{
            title: "221B Baker St. London, England",
            description: "TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA TESTING DATA ",
            ID: 0,
            currentValue: "10000",
            currentDebt: "8000",
            numUnits: "6",
            currentRentRoll: "4000",
          },
    ]);
});



//start server
app.listen(port);