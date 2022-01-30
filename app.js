//run npm i express to install express and others
//
const express = require("express");
const morgan = require("morgan");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config");
const { join } = require("path");

//below is our temporary data file, this will be replaced by a database

const { getItems, addItem, removeItem } = require("./itemData");

//declaring our express application
const app = express();
// Body Parsing
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("hello world");
});

// Webpack Dev Middleware
const compiler = webpack(webpackConfig);
app.use(
  middleware(compiler, {
    publicPath: join(__dirname, "public"),
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: true,
  })
);

//app.use(express.static(join(__dirname, 'public')));
app.use(express.static("public"));
module.exports = app;
