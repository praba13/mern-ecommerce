const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config({ path: path.join(__dirname, 'config/config.env') });

//routes
const products = require('./routes/product');

//middlewares
app.use('/api/v1/', products);

module.exports = app;
