const mongoose = require('mongoose');

const feeRecordSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid",
    },

    totalFee: {
        type: Number,
        required: true
    },

    paidAmount: {
        type: Number,
        required: true,
        default: 0
    },

    paidDate: {
        type: Date,
        default: null,
    }
}, { _id: false });

module.exports = feeRecordSchema;