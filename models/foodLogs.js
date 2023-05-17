const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
    name: String,
    entry: String,
    isDelicious: {type: Boolean, default: true}
}, 
{timestamps:true}
)
const FoodLogs = mongoose.model("Logs", logsSchema)

module.exports = FoodLogs; 
