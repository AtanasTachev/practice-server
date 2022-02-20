const Mentor = require('./Mentor');

const { SECRET } = require('../src/constants');
const { jwtSign } = require('../src/utils/jwtSign')

exports.register = function ({...mentorData}) {
    // console.log({...userData});
    return User.create({...mentorData});
};
exports.login = async function ( email, pass ) {
    let user = await User.findByEmail(email);
    let isValid = user.validatePassword(pass);

    if(isValid) {
        let accessToken = await jwtSign({ _id: user._id, email: user.email}, SECRET)
        await user.save();
        return {user, accessToken};
    } else {
        throw { message: 'Invalid email or password' }
    } 
} 