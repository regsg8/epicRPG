const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jarSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    maxPoints: {
        type: Number,
        required: true
    },
    currentPoints: Number,
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Jar", jarSchema);