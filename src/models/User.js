const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT = 10;

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
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.pass, SALT)
    .then(hash => {
        this.pass = hash;
        next();
    });
});
userSchema.static('findByEmail', function(email) {
    return this.findOne({email});
});
userSchema.method('validatePassword', function(pass) {
    return bcrypt.compare(pass, this.pass);
});

const User = mongoose.model('User', userSchema);
module.exports = User;