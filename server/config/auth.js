var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');

var githubKeys = require('./env/config.js').github;
// docs for methodOverride; https://docs.omniref.com/js/npm/method-override/1.0.2



module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
		done(nul, obj);
	});

	passport.use(new GitHubStrategy({
		clientID: githubKeys.GITHUB_CLIENT_ID,
		clientSecret: githubKeys.GITHUB_CLLIENT_SECRET,
		callbackURL: "http://127.0.0.1:8080/" // not sure about this
	}, 
	function(accessToken, refreshToken, profile, done) {
		// async verification
		process.nextTick(function() {
			// **FIX 
			// once we have a db setup, we would store their info
			// into our db
			console.log('value for profile is: ', profile);
			return done(null, profile);
		});
	}));
}