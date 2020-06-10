const router = require("express").Router();
const workout = require("../models/workout");

router.get("/api/workouts", function (req, res) {
    workout.find({})
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", function (req, res) {
    workout.create({})
        .then(workout => {
            console.log(workout);
            res.json(workout)
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;