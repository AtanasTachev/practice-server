const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema ({
    practiceTitle: {
        type: String,
        required: true
    },
    mentor: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    dateOfExam: {
        type: Date,
        required: true
    },
    dueDateOfProject: {
        type: Date,
        required: true
    },
    students: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});



const Practice = mongoose.model('Practice', practiceSchema);
module.exports = Practice;