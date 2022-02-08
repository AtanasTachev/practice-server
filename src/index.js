const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const env = process.env.NODE_ENV || 'development';
const initDatabase = require('./config/database');
const config = require('./config/config')[env];
const dbConnection = process.env.dbConnection;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

initDatabase(dbConnection)
.then(() => {
    app.listen(process.env.PORT, console.log.bind(console, `App listening to http://localhost:${process.env.PORT}`));
    console.log('Connected to DB...');
})
.catch(error => {
    console.log(`App initialization failed: ${error}`);
})
