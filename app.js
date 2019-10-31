const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = express();
//Middleware
app.use(morgan('dev'));

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

//connect database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connect successful!'))
  .catch(err => console.log('DB connection failed!'));

app.get('/api/v1/users', (req, res) => {
  res.status(200).json({
    status: 'success'
  });
});

//Start the server
const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Listening on port ${port}`);
});
