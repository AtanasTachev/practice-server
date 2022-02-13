exports.isAuth = function(req, res, next) {
    if(!req.user) {
        return res.status(401).redirect('/');
    }
    next();
}