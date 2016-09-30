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

  app.route('/pad/create')
    .get((req, res) => {
      ukey = '/' + chance.string({length:5, pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'});
      create_namespace(ukey, io);
      cached[ukey] = ukey;
      res.send(ukey);
    });

  var passport = require('passport');
  var isAuth = require('./isAuthenticated');

  app.get('/auth/github',
    passport.authenticate('github', {scope: ['user', 'public_repo']}),
    (req, res) => {
      console.log('success'); 
    }
  );

  app.get('/auth/github/callback',
    passport.authenticate('github', {failureRedirect: '/'}),
    (req, res) => {
      console.log('entered into the auth/github/callback');
      res.redirect('/');
    });

  app.get('/logout',
    (req, res) => {
      req.logout();
      res.redirect('/');
    });


  console.log(path.join(__dirname, '/../../client/pad.html'));
  app.route('/*')
    .get((req, res) => {
      if (cached[req.path])
        res.render('pad.html');
      else
        res.send(404);
    });

  
    /*function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
    }*/

    // commenting out for now, but this pretty much checks for existing auth. 
    // app.route('/[^\/]', isAuth(req, res, next));
};