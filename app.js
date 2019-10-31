const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();
//Middleware
app.use(morgan('dev'));

//Start the server
const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Listening on port ${port}`);
});
