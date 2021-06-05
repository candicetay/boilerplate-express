var express = require("express");
var path = require("path");
var app = express();

app.get("/", function (req, res) {
  //   res.send("Hello Express");
  absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
});

module.exports = app;
