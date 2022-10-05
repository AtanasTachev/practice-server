const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT = 10;

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
        validate: /[A-Za-z]+@[A-Za-z]+./i
    },
    pass: {
        type: String,
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