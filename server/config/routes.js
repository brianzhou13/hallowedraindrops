// Routes received by the server
var create_namespace = require('./services.js').create_namespace;
var fs = require('fs');
var path = require('path');
var express = require('express');
var Chance = require('chance'),
    chance = new Chance();

var cached = {}, ukey = '';

module.exports = (app, io) => {
  // app.use(express.static(__dirname + '/../../client/app'));


  var passport = require('passport');
  var isAuth = require('./isAuthenticated.js');

  app.route('/pad/create')
var passport = require('passport');
var isAuth = require('./isAuthenticated.js');

module.exports = (app) => {
  app.route('/pizza')
    .get((req, res) => {
      ukey = '/' + chance.string({length:5, pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
      create_namespace(ukey, io);
      cached[ukey] = ukey;
      res.send(ukey);
    });

  console.log(path.join(__dirname, '/../../client/pad.html'));
  app.route('/*')
    .get((req, res) => {
      if (cached[req.path])
        res.render('pad.html');
      else
        res.send(404);
    });

  // ** below code block is used for the server setup
  // for socket.io
  // link: http://stackoverflow.com/questions/27393705/socketio-get-http-localhost3000-socket-io-eio-3transport-pollingt-1418187
  
  // end for socket
};
 
  app.route('/auth/github')
    .get((req, res) => {
      passport.authenticate('github', { failureRedirect: '/'}),
      function(req, res) {
        res.redirect('/'); // 
      }
    });

  app.route('/logout')
    .get((req, res) => {
      req.logout();
      res.redirect('/');// need to redirect elsewhere...
    });

  // app.route('/[^\/]', isAuth(req, res, next));

  /*function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}*/

};
