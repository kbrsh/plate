var express = require('express');
var hexu = require("hexu");
var app = express();

app.use(express.static('assets'));

var log = (log, color) => {
  console.log(hexu[color](log));
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
  log("======= Plate Is Running =======", "blue")
});
