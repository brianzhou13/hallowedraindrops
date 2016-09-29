const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport'); 
const session = require('express-session');
const methodOverride = require('method-override'); 



module.exports = (app, express) => {
  //Print all of the requests to the server
  app.use(morgan('dev'));

  // github-auth
  require('./auth.js')(passport);

  //Reads information from forms ands puts it in a body object
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // tutorial put it after bodyparser
  app.use(methodOverride());
  app.use(session({ secret: 'pizza kitty', resave: false, saveUninitialized: false}))
  // resave: forces the session to be saved back to the session store
  // saveUninitialized: forces a session that is 'uninitialized' to be saved to the store
  	// having it false will help race conditions and storage


  // serves static files
  app.use(express.static(__dirname + '/../../client'));
};
