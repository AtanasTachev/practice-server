const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {REMOTE_DB} = require('./constants');
const {LOCAL_DB} = require('./constants');

const routes = require('./routes')
const env = process.env.NODE_ENV || 'development';
const initDatabase = require('./config/database');
const config = require('./config/config')[env];
const port = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(routes);

initDatabase(REMOTE_DB)
.then(() => {
    app.listen(port, console.log.bind(console, `App listening to http://localhost:${port}`));
    console.log('Connected to DB...');
})
.catch(error => {
    console.log(`App initialization failed: ${error}`);
})
