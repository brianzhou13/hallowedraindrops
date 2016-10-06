var Sequelize = require('sequelize');
var pg = require('pg');
var fs = require('fs');
var pgCred;

try {
    fs.accessSync(__dirname + '/../config/env/config.js', fs.F_OK);
    // Do something
    pgCred = require('../config/env/config.js').postgres;
} catch (e) {
    // It isn't accessible
    pgCred = require('../config/env/config_example.js').postgres;
}

var sequelize = new Sequelize(pgCred.db, pgCred.user, pgCred.password, {
  host: pgCred.host,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

//possible use to create DB if it doesn't exist
//NOT being used right now
var pgInit = function(callback) {
  var dbName = 'codedrop',
      username = 'hallowedraindrops',
      password = 'codedrop',
      host = 'localhost';

  var conStringPri = 'postgres://' + username + ':' + password + '@' + host + '/postgres';
  var conStringPost = 'postgres://' + username + ':' + password + '@' + host + '/' + dbName;

  // connect to postgres db
  pg.connect(conStringPri, function(err, client, done) {
      // create the db and ignore any errors, for example if it already exists.
      client.query('CREATE DATABASE ' + dbName, function(err) {
          //db should exist now, initialize Sequelize
          var sequelize = new Sequelize(conStringPost);
          callback(sequelize);
          client.end(); // close the connection
      });
  });
};

module.exports = {
  init: pgInit,
  sequelize: sequelize,
};
