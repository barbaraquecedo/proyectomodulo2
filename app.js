require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const createError = require("http-errors")

const app = express();


/** Configs */
require("./config/hbs.config")
require("./config/db.config")


app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);


/**Middlewares */
app.use(express.static(`${__dirname}/public`));
app.use(logger("dev"));

const routes = require("./config/routes.config");
app.use("/", routes)





const port = process.env.PORT || 3000
app.listen(port ,() => console.log(`Application running at port ${port}`))