// schema for restaurants
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var testingSchema = new Schema({
  question_id: Number,
  fnInput: String,
  fnOutput: String,
  sourceCode: String
});

var Test = mongoose.model('Test', testingSchema);

module.exports = Test;
