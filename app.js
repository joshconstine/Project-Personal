//run npm i express to install express and others
//
const express = require("express");
const morgan = require("morgan");

//below is our temporary data file, this will be replaced by a database

const { getItems, addItem, removeItem } = require("./itemData");

//declaring our express application
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(getItems());
});

//app.use(express.static(join(__dirname, 'public')));

module.exports = app;
