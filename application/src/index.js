// express router. Api endpoints defined here.
const express = require('express');
const app = express();
const port = 8080;

//serve static assets - built and copied in by docker
app.use(express.static('static'));


//Route definitions
app.post('/addProperty', function(req, res){
    
});



//start server
app.listen(port);