//Import mongoose to create the Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create the schema with all of it's respective attributes
const userSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;