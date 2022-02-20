const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT = 10;

const mentorSchema = new mongoose.Schema ({
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
    },
    pass: {
        type: String,
        required: true
    },
    practicesToMentor: [{
        type: mongoose.Types.ObjectId,
        ref: 'Practice'
    }]
});

mentorSchema.pre('save', function(next) {
    bcrypt.hash(this.pass, SALT)
    .then(hash => {
        this.pass = hash;
        next();
    });
});
mentorSchema.static('findByEmail', function(email) {
    return this.findOne({email});
});
mentorSchema.method('validatePassword', function(pass) {
    return bcrypt.compare(pass, this.pass);
});

const User = mongoose.model('Mentor', userSchema);
module.exports = Mentor;