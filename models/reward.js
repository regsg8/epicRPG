const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rewardSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
})