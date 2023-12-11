const express = require('express');
const http = require('http');
const { Server } = require('socket.io'); // Importing socket.io

const app = express();
const expressServer = http.createServer(app);
const io = new Server(expressServer); // Socket.io server

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); // __dirname = default directory
});

// Name spacing first
let firstSpace = io.of("/first");
// Checking socket connection
firstSpace.on('connection', function (socket) {
  firstSpace.emit('myEvent', "Hello from first!");
});

// Name spacing second
let secondSpace = io.of("/second");

// Checking socket connection
secondSpace.on('connection', function (socket) {
  secondSpace.emit('myEvent', "Hello from second!");
  
  socket.on('disconnect', function () {
    console.log('User is disconnected!');
  });
});

// Port selection
expressServer.listen(3000, function () {
  console.log('Server is running! PORT:3000');
});
