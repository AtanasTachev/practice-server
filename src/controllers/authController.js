const router = require('express').Router();
const authService = require('../services/authService');
const { isAuth } = require('../middlewares/authMiddleware')

router.post('/register', async(req, res) => {
    let {
        firstName,
        lastName,
        email,
        gender,
        role,
        pass,
        repass } = req.body;
    try {
        if(pass === repass) {
            let user = await authService.register({
                firstName,
                lastName,
                email,
                gender,
                role,
                pass
            });
            let accessToken = await authService.login(email, pass)
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
router.post('/logout', isAuth, async(req, res) => {
    res.json({_id: '',
            email: '',
            accessToken: ''
    });
});
router.get('/:userId', async(req, res) => {
    try {
        const user = await authService.getUser(req.params.userId);
        res.json(user);
    } catch(error) {
        res.json({message: error.message});
    }
})

module.exports = router;