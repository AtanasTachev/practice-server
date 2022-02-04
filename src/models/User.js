const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT = 9;

const userSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        validate: /[A-Za-z]+@[A-Za-z]+./i
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    }
})