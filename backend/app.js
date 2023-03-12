const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config({ path: path.join(__dirname, 'config/config.env') });

module.exports = app;
