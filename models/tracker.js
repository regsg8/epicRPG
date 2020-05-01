const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    timesCompleted: {
        type: Number
    },
    jar: {
        type: Schema.Types.ObjectId,
        ref: "Jar",
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Tracker", trackerSchema);