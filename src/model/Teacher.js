const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    degree: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    contact: {
        type: String,
        required: true,
        min: 11,
        max: 11
    },
    assignedclass: [
        {
            type: String,
            required: true
        }
    ],
    subject: [
        {
            type: String,
            required: true
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model("Teacher", teacherSchema);