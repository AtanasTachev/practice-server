const router = require('express').Router();
const authService = require('../services/authService');
const { isAuth } = require('../middlewares/authMiddleware')

router.post('/register', async(req, res) => {
    let {
        email,
        password,
        repassword } = req.body;
    try {
        if(password === repassword) {
            let user = await authService.register({
                email,
                password
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
        const {email, password} = req.body;
        const {user, accessToken} = await authService.login(email, password)
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