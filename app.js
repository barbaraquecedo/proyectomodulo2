require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const createError = require("http-errors");


const app = express();


/** Configs */



/**Middlewares */

const routes = require("./config/routes.config");
app.use("/", routes)


const port = process.env.PORT || 3000
app.listen(port ,() => console.log(`Application ruuning at por ${port}`))