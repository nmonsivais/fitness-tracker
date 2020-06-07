const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

const databaseUrl = "workouts";
const collections = ["exercises"]

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

app.get("/", (req, res) => {
    res.send("Hellow World");
});



app.listen(3000, () => {
    console.log("App running on port 3000");
});