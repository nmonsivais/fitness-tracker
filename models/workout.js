const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "You must provide name of the exercise."
    },
    type: {
        type: String,
        trim: true,
        required: "You must provide the type of exercise."
    },
    weight: {
        type: Number,
        trim: true,
    },
    sets: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true,
    },
    duration: {
        type: Number,
        trim: true,
        required: "Enter how long did you work out?"
    },
    distance: {
        type: Number,
        trim: true,
    },
    day: {
        type: Date,
        default: Date.now
    }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout