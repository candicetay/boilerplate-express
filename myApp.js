var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("Response String");
});

module.exports = app;
