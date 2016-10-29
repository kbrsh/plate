var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000);
