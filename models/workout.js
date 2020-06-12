const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    type: {
        type: String,
        trim: true,
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

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout