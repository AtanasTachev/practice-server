const jwt = require('jsonwebtoken');

exports.jwtSign = function(payload, secret) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function (error, token) {
            if(error) {
                reject(error)
            } else {
                resolve(token);
            }
        });
    });
};