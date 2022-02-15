const Practice = require('../models/Practice');
const User = require('../models/User')

exports.createPractice = async function (...practiceData) {
    console.log(practiceData);
    let practice = new Practice({...practiceData});
    let user = await User.findByIdAndUpdate(creator, {
        $push: { practicesCreated: practice._id }
    });
    return [practice.save(), user];
}