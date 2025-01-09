require("dotenv").config("../.env");

const express = require("express");
const middleware = require("./middleware");
const router = require("./routes");
const routes = require("../routes");
const { notFoundHandler, errorHandler } = require("./error");
const app = express();

// * middlewares
app.use(middleware);

// * routes
app.use(router);
app.use(routes);

// ! errors
app.use([notFoundHandler, errorHandler]);

module.exports = app;
