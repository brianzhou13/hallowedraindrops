var GitHubStrategy = require('passport-github2').Strategy;
var partials = require('express-partials');

var githubKeys = require('./env/config.js').github;
// docs for methodOverride; https://docs.omniref.com/js/npm/method-override/1.0.2



module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		console.log('user is: ', user);
		done(null, user);
	});

	passport.deserializeUser(function(obj, done) {
		done(null, obj);
	});

	console.log('github keys are: ', githubKeys);

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
			return done(null, profile);
		});
	}));
}