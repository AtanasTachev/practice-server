const User = require('../models/User');

const { SECRET } = require('../constants');

exports.register = function ({...userData}) {
    return User.create({...userData});
    
}