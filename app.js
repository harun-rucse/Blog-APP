const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Route
app.use('/api/v1/users', userRouter);

//export app
module.exports = app;
