const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
});

// Define a model
module.exports = mongoose.model('User', userSchema);