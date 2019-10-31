const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const app = express();
//Middleware
app.use(express.json());
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

//Create schema for CRUD operations
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'use must have a name']
  },
  password: {
    type: String,
    require: [true, 'use must have a password']
  },
  passwordConfirm: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: 'user'
  }
});

//craete model
const User = mongoose.model('User', userSchema);

app.get('/api/v1/users', async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).json({
      status: 'success',
      result: allUsers.length,
      data: {
        users: allUsers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
});
app.post('/api/v1/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        newUser
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
});

//Start the server
const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => {
  console.log(`Listening on port ${port}`);
});
