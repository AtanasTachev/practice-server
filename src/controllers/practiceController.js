const router = require('express').Router();
const practiceService = require('../services/practiceService')

router.post('/create', async(req, res) => {
    let {practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject,creator} = req.body;
    try{
        let practice = await practiceService.createPractice(practiceTitle, mentor, startDate, duration, dateOfExam, dueDateOfProject, creator)
        res.status(200).json(practice);
    } catch (error) {
        res.status(400).json({message: error.message});
    } 
});

module.exports = router;