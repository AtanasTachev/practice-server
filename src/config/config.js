require('dotenv').config();
module.exports = {
    development: {
        port: process.env.PORT || 3030,
        dbConnection: process.env.LOCAL_DB
    },
    build: {
        port: process.env.PORT || 3030,
        dbConnection: process.env.REMOTE_DB
    }
}