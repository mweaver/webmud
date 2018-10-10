let express = require('express');
let app = express();
let path = require('path');
let http = require('http').Server(app);
let io = require('socket.io')(http);

let World = require('./world');

let port = process.env.PORT || 3000;
let userNumber = 1;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  console.log('wheee');
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.username = "User " + userNumber;
  userNumber++;

  socket.on('chat message', function(msg){
    io.emit('chat message', socket.username + ': ' + msg);
  });

  socket.on('loaded', function() {
      io.emit('chat message', World.serve());
  });

});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
