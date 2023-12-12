const express = require('express');
const http = require('http');
const { connect } = require('http2');
const { Server } = require('socket.io'); // Importing socket.io

const app = express();
const expressServer = http.createServer(app);
const io = new Server(expressServer); // Socket.io server

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); // __dirname = default directory
});


io.on('connection',function(socket){

  //adding rooms and event

  socket.join("my-room");
  let myRoomMembers=io.sockets.adapter.rooms.get('my-room').size;

  io.sockets.in('my-room').emit('coding','Nabil is coding= '+myRoomMembers)

  socket.join("bed-room");
  io.sockets.in('bed-room').emit('sleeping','Nabil is sleeping= '+myRoomMembers)
  

})

// Port selection
expressServer.listen(3000, function () {
  console.log('Server is running! PORT:3000');
});
