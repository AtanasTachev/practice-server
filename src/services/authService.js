const User = require('../models/User');

const { SECRET } = require('../constants');
const { jwtSign } = require('../utils/jwtSign')

exports.register = function ({...userData}) {
    console.log({...userData});
    return User.create({...userData});
};
exports.login = async function ( email, password ) {
    let user = await User.findByEmail(email);
    let isValid = user.validatePassword(password);

    if(isValid) {
        let accessToken = await jwtSign({ _id: user._id, email: user.email}, SECRET)
        await user.save();
        return {user, accessToken};
    } else {
        throw { message: 'Invalid email or password' }
    } 
} 