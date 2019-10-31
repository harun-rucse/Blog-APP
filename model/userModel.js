const mongoose = require('mongoose');

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

//export User
module.exports = User;
