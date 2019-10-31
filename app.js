const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const app = express();

//Middleware
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Route
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);
app.use('/', (req, res) => {
  res.send('Welcome to Node js app on heroku.');
});

//export app
module.exports = app;
