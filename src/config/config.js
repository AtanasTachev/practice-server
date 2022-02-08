require('dotenv').config({path: __dirname + '/.env'});
module.exports = {
    development: {
        port: process.env.PORT || 3030,
        dbConnection: process.env['LOCAL_DB']
    },
    build: {
        port: process.env.PORT || 3030,
        dbConnection: process.env.REMOTE_DB
    }
}