const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const errorMiddleware = require('./middlewares/error');
const app = express();

dotenv.config({ path: path.join(__dirname, 'config/config.env') });

//middlewares
app.use(express.json());

//routes
const products = require('./routes/product');
const auth = require('./routes/auth');

app.use('/api/v1/', products);
app.use('/api/v1/', auth);
app.use(errorMiddleware);

module.exports = app;
