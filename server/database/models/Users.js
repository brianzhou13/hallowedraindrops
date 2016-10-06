var sequelize = require('../config.js').sequelize;
var Sequelize = require('sequelize');

var User = sequelize.define('user', {
  login: Sequelize.STRING,
  github_id: Sequelize.STRING,
  name: Sequelize.STRING,
  avatar_url: Sequelize.STRING,
  github_url: Sequelize.STRING,
  email: Sequelize.STRING,
  company: Sequelize.STRING,
  admin: Sequelize.BOOLEAN,
  moderator: Sequelize.BOOLEAN
});

module.exports = User;


