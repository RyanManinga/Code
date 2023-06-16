const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 255,
    required: true,
  },
  email: {
    type: String,
    minLength: 3,
    maxLength: 255,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 255,
    required: true
  }
});

const User = mongoose.model('Customers', userSchema);

module.exports = User;