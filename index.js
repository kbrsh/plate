var express = require('express');

var model = require("./model/model.js");
var log = require("./src/log.js");

var app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
  log("======= Plate Is Running =======", "blue")
});
