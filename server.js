//NPM required packages.
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

//connection to server
const PORT = process.env.PORT || 3000;

//routes
const app = express();
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

//
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

//turns port on.
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});