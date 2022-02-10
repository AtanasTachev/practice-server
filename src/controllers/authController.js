const router = require('express').Router();
const authServce = require('../services/authService');

router.post('/register', async(req, res) => {
    let {
        firstNane,
        lastName,
        email,
        gender
    } = req.body;
    try {
        if(password === repeatpassword) {
            
        }
    } catch (error) {
        console.log({message: error.message});
    }
});