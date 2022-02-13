const router = require('express').Router();

const authController = require('./controllers/authController');

router.use('/users', authController);

module.exports = router;