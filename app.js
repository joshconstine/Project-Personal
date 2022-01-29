//run npm i express to install express and others
//
const express = require("express");
const morgan = require("morgan");

//declaring our express application
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello world!");
});

//app.use(express.static(join(__dirname, 'public')));

module.exports = app;
