const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

var onlineUser = 1;

io.on('connection', (socket) => {

  socket.on('chat message', msg => { io.emit('chat message', msg) });
  console.log("Total online users: "+onlineUser);
  onlineUser = onlineUser + 1;

});

http.listen(port);

// enter to send
// empty message box
// deploy project