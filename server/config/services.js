// Services URL
// var jwt = require('jwt-simple');
// var secret = 'workplease';
var User = require('../database/models/Users.js');

// createToken = (user, code) => {
//   var payload = {
//     admin: user.admin,
//     moderator: user.moderator,
//     user: user.username,
//     id: user.github_id
//   };

//   return jwt.encode(payload, code);
// };

module.exports = {
  REPL: 'http://localhost:3000/api/repl',
  create_namespace: function(path, io){
    console.log('entered into services for namespace creation');
  	var nsp = io.of(path);
  	nsp.on('connection', (socket) => {
  	  console.log('a user has connected');

  	  socket.on('text change', (msg) => {
  	    console.log('msg value is: ', msg);
  	    nsp.emit('alter text', msg);
  	  });

  	  socket.on('append result', (msg) => {
  	    console.log('append result is: ', msg);
  	    nsp.emit('alter result', msg);
  	  });

  	  socket.on('disconnect', () => {
  	    console.log('a user has disconnected');
  	  });
  	});
  },

  addUser: (profile, User, callback)  => {
    User.sync().then(() => {
      console.log('adding user');
      return User.find({where: {github_id: profile.id}}).then((user) => {
        console.log('finding if user exist in add user');
        if (!user) {
          console.log('user does not exist');
          User.create({
            login: profile.username,
            github_id: profile.id,
            name: profile.displayName,
            avatar_url: profile._json.avatar_url,
            github_url: profile.profileUrl,
            email: profile.emails[0].value,
            company: profile._json.company,
            admin: null,
            moderator: null
          }).then((user) => {
            callback(user);
          });
        }
        // callback(createToken(user, secret));
        callback(user);
      });
    });
  },

  findUser: (id, callback) => {
    console.log('finding user');
    User.sync().then(() => {
      return User.find({where:{github_id: id}}).then((user) => {
        callback(user);
      });
    });
  }
};
