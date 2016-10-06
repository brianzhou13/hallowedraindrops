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
      console.log('creating pad');
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
      res.redirect('/'); // need to redirect to an editor
    });

  app.get('/logout',
    (req, res) => {
      req.logout();
      res.redirect('/');
    });

// *****COMMENTING OUT FOR TESTING
  // have a regex path that looks specifically for /editor/**
  // app.route('/[editor]+[$/]*')
  //   .get((req, res) => {
  //     console.log('etnered into the editor route from server');
  //     // chop everything outside of editor
  //     // pathname: /editor/NEUHQ
  //     var temp = req.path.slice(7, req.path.length);
  //     if(cached[temp]) {
  //       console.log('about to render pad.html');
  //       res.redirect(cached[temp]); // we should render this from back-end
  //       // res.render('index.html'); // we should render this from back-end
  //       // send a status of 200
  //     } else {
  //       console.log(' no such pad');
  //       console.log('cached[temp] value is: ', cached[temp]);
  //       res.send(404);
  //     }
  //   });

  // add in a post request here
  app.route('/api/[editor]+[$/]*')
    .post((req, res) => {
      console.log('entered into the server-side post request');
      console.log('req valu is: ', req);
      if(req) {
        res.status(202);
      } else {
        res.send(404);
      }
      // chop everything outside of editor
      // pathname: /editor/NEUHQ
      // var temp = req.path.slice(7, req.path.length);
      // if(cached[temp]) {
      //   console.log('about to render pad.html');
      //   res.render('pad.html');
      //   // send a status of 200
      // } else {
      //   console.log(' no such pad');
      //   console.log('cached[temp] value is: ', cached[temp]);
      //   res.send(404);
      // }
    });

  // app.route('/*')
  //   .get((req, res) => {
  //     res.redirect('/home');
  //   });

// *****COMMENTING OUT FOR TESTING
  // console.log(path.join(__dirname, '/../../client/pad.html'));
  app.route('/*')
    .get((req, res) => {
      console.log('req.path provided is: ', req.path);
      var path = req.path.split('editor');
      var tempPath = req.path;
      if (cached[path[1]]) {
        console.log('redirecting..');
        res.render('index.html');
      }
        // in the future, we need to see if we should completely remove pad.html
        // and have it render within index.html with *pad-specific components
      else
        res.sendStatus(404);
    });


    /*function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
    }*/

    // commenting out for now, but this pretty much checks for existing auth.
    // app.route('/[^\/]', isAuth(req, res, next));
  // ** below code block is used for the server setup
  // for socket.io
  // link: http://stackoverflow.com/questions/27393705/socketio-get-http-localhost3000-socket-io-eio-3transport-pollingt-1418187

  // end for socket
};
