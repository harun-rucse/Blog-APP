const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Middleware
app.use(express.json());
app.use(morgan('dev'));

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

const getAllUsers = async (req, res) => {
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
};

const createUser = async (req, res) => {
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
};

//craete model
const User = mongoose.model('User', userSchema);

//Route
const userRouter = express.Router();
app.use('/api/v1/users', userRouter);

userRouter
  .route('/')
  .get(getAllUsers)
  .post(createUser);

module.exports = app;
