const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();

app.use(express.json());