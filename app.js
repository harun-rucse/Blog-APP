const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Route
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

//export app
module.exports = app;
