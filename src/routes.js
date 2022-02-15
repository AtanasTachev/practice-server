const router = require('express').Router();

const authController = require('./controllers/authController');
const practiceController = require('./controllers/practiceController');

router.use('/users', authController);
router.use('/practice', practiceController);

module.exports = router;