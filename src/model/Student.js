const mongoose = require("mongoose");
const feeRecordSchema = require("./FeeRecord");

const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    class: {
        type: String,
        required: true,
        min: 1,
        max: 10
    },
    phone: {
        type: String,
        required: true,
        min: 11,
        max: 11
    },
    paid:{
        type: Boolean,
        default: false
    },
    monthlyFee: {
        type: Number,
        default: 0
    },
    fees: [feeRecordSchema]
}, {timestamps: true});

module.exports = mongoose.model("Student", studentSchema);