var mongoose = require('mongoose');
var db = require('../config/env/config.js').mongo;

mongoose.connect(db.url); //connect to database
var Schema = mongoose.Schema;

var githubSchema = new Schema({
  avatar_url: String,
  github_url: String,
  followers_url: String,
  following_url: String,
  starred_url: String,
  repos_url: String,
  email: String,
  followers: number,
  following: number,
  created_at: String,
  updated_at: String
});
