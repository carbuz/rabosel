var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var _ = require("lodash");

app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

var API = {};

_.extend(API, require('./API/yahoo.js'));


app.get('/api/:handler', function (req, res) {
  console.log("Richiesta la funzione", req.params.handler, req.query);
  API[req.params.handler](function(err, out) {
    res.send(out);
  }, req.query);
})

app.listen(5050)