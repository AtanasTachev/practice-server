require('dotenv');
module.exports = {
    development: {
        port: process.env.PORT || 3030,
        dbConnection: 'mongobd:/localhost:27017/Practice'
    },
    build: {
        port: process.env.PORT || 3030,
        dbConnection: process.env.remoteDb
    }
}
