const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    time: String,
    place: String,
    foods: { type: [String], default: ['none'] },
    drinks: { type: [String], default: ['none'] },
    thoughts: String,
    },
    { timestamps: true }
)
const FoodLogs = mongoose.model("FoodLogs", logsSchema)

module.exports = FoodLogs; 
