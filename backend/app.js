const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const errorMiddleware = require('./middlewares/error');
const cookieParser = require('cookie-parser');
const app = express();

dotenv.config({ path: path.join(__dirname, 'config/config.env') });

//middlewares
app.use(express.json());
app.use(cookieParser());

//routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');

app.use('/api/v1/', products);
app.use('/api/v1/', auth);
app.use('/api/v1/', order);
app.use(errorMiddleware);

module.exports = app;
