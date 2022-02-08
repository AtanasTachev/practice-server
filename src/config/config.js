// require('dotenv');
module.exports = {
    development: {
        port: process.env.PORT || 3030,
        dbConnection: 'mongodb://localhost:27017/Practice'
    },
    build: {
        port: process.env.PORT || 3030,
        dbConnection: 'mongodb+srv://atanas:3698741Md@cluster0.lgbxa.mongodb.net/practice?retryWrites=true&w=majority'
    }
}
console.log(process.env);