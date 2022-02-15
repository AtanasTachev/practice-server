const router = require('express').Router();
const practiceService = require('../services/practiceService')

router.post('/create', async(req, res) => {
    let {...practiceData} = req.body;
    try{
        let practice = await practiceService.createPractice(...practiceData)
        res.status(200).json(practice);
    } catch (error) {
        res.status(400).json({message: error.message});
    } 
});

module.exports = router;