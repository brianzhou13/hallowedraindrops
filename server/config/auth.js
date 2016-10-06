var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');
var fs = require('fs');
var Promise = require('bluebird');
var User = require('../database/models/Users.js');
var services = require('./services.js');

// promiseify the whole fsPromise
Promise.promisifyAll(require('fs'));

// docs for methodOverride; https://docs.omniref.com/js/npm/method-override/1.0.2

module.exports = function(passport) {

	var githubKeys;

	passport.serializeUser(function(user, done) {
		console.log('user is: ', user);
		done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});

	/* @name: fs.statAsync
	 * @purpose: Checking async using fs to see if we have config.js
	 * @input: a file name
	 * @output: what file to use for our githubKeys variable for github OAuth
	 */
	fs.statAsync(__dirname + '/env/config.js').then((data) => {
		if(typeof data === "object") {
			return true;
		}
		return false;
	}).then((data) => {
		if(true) {
			githubKeys = require('./env/config.js').github;
		} else {
			githubKeys = require('./env/config_example.js');
		}
		passport.use(new GitHubStrategy({
			clientID: githubKeys.GITHUB_CLIENT_ID,
			clientSecret: githubKeys.GITHUB_CLIENT_SECRET,
			callbackURL: githubKeys.GITHUB_CALLBACK_URL // not sure about this
		},
		function(accessToken, refreshToken, profile, done) {
			// async verification
			process.nextTick(function() {
				console.log('entered into the passport use part');
				// **FIX
				// once we have a db setup, we would store their info
				// into our db
				console.log('value for profile is: ', profile);
				services.addUser(profile, User, (token) => {
					console.log('created token', token);
					return done(null, profile);
				});
			});
		}));
	}).catch((err) => {
		console.log('error occurred in setting up github-oauth');
		console.log(err);
		throw err;
	});
}
