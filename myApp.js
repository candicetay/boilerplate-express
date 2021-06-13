const dotenv = require("dotenv").config();
const e = require("express");
var express = require("express");
var path = require("path");
var app = express();

app.get("/", function (req, res) {
  //   res.send("Hello Express");
  absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.use("/public", express.static(path.join(__dirname, "public")));
console.log(path.dirname(require.main.filename));
app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;
