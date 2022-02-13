const router = require('express').Router();
const authService = require('../services/authService');

router.post('/register', async(req, res) => {
    let {
        firstName,
        lastName,
        email,
        gender,
        pass,
        repass } = req.body;
    try {
        if(pass === repass) {
            let user = await authService.register({
                firstName,
                lastName,
                email,
                gender,
                pass
            });
            let accessToken = await authService.login(email, password)
            res.json({
                _id: user._id,
                email: user.email,
                accessToken
            });
        }
    } catch (error) {
        console.log({message: error.message});
    }
});

router.post('/login', async(req, res) => {
    try {
        const {email, pass} = req.body;
        const {user, accessToken} = await authService.login(email, pass)
        res.json({
            _id: user._id,
            email: user.email,
            accessToken
        });
    } catch (error) {
        console.log({message: error.message});
    }
});

module.exports = router;