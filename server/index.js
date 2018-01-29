let express = require('express');
let bodyParser = require('body-parser');
let {rainWater} = require('./rainWater.js');
let app = express();
let port = 3000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
  let response = rainWater(req.body.data);
  res.Status(201).send(response);
});



app.listen('app is listening at ', port);