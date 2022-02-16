const Practice = require('../models/Practice');
const User = require('../models/User')

exports.createPractice = async function (practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject,creator) {
    console.log(practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject,creator);
    let practice = new Practice({practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject,creator});
    let user = await User.findByIdAndUpdate(creator, {
        $push: { myPractices: practice._id }
    });
    return [practice.save(), user];
}