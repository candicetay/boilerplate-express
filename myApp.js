const dotenv = require("dotenv").config();
//necessary to obtain env variable

const e = require("express");
var express = require("express");
var path = require("path");
var app = express();

// Serve an HTML file
app.get("/", function (req, res) {
  //   res.send("Hello Express");
  absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

// Serve static assets
app.use("/public", express.static(path.join(__dirname, "public")));
console.log(path.dirname(require.main.filename));

// Use env var
// app.get("/json", function (req, res) {
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     res.json({ message: "HELLO JSON" });
//   } else {
//     res.json({ message: "Hello json" });
//   }
// });

// Implement a Root-Level Request Logger Middleware
// for all paths
app.use(function (req, res, next) {
  console.log(req.method, req.path, "-", req.ip);
  next();
});

//Chain middleware to create a time server
app.get(
  "/now",
  function (req, res, next) {
    var today = new Date();
    var time_string = today.toString();
    req.time = time_string;
    next();
  },
  function (req, res) {
    res.send({ time: req.time });
  }
);
module.exports = app;
