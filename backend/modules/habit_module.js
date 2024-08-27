const mongoose = require('mongoose');

// Define a schema
const habit_schema = new mongoose.Schema({
  habit: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  is_deleted: {
    type: String,
    required: true
  },

});

// Define a model
module.exports = mongoose.model('Habits', habit_schema);