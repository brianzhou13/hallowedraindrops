// Services URL
module.exports = {
  REPL: 'http://localhost:3000/api/repl',
  create_namespace: function(path, io){
    // console.log('valuef or path is: ', path);
    // console.log('valuef or io is: ', io);
    console.log('services.js:   ', io.of)
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
  }
};
