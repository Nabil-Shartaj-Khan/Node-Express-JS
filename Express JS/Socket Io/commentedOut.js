      
    //   all the codes that are commented out from index.html script
      
      
      socket.on("message", function (msg)       //catching server data

      //catching custom event data
      socket.on("showTime", function (msg) {
        document.getElementById("first").innerHTML = msg;     //used to non-continuous data transmission
        document.getElementById("time").innerHTML = "";       //used to continuous data transmission
        document.getElementById("time").innerHTML = msg;      //used to continuous data transmission

        document.getElementById("time").innerHTML = msg; //used to custom event data transmission
        socket.send(name); //normal event
    })
          //receiving broadcast message from server side
          socket.on("MyBroadcast", function (data) {
            document.getElementById("message_show").innerHTML = data;
          });

                //name spacing
      socket.on("myEvent", function (data) {
        document.getElementById("message_show").innerHTML = data;
      });


    // all the codes that are commented out from index.js

        //sending data to client
     setTimeout(function(){
         socket.send("Data is send from server.")
     },5000)
    
    //continuous data transmission
     setInterval(function(){
         let time=new Date().getTime();
     socket.send(time) 
     },500)

         setInterval(function(){
         let time=new Date().getTime();
         socket.emit('showTime',time) 
     },500)

     //catching from message event
         socket.on('message',function(msg){
        console.log(msg)     

     })

     function sendData() {
        name = document.getElementById("name").value;
       socket.emit("myName", name); //custom event
      }

          //custom event receiving from client side
     socket.on('myName',function(msg){
        console.log(msg)}


          // Broadcasting from server to client
  io.sockets.emit('MyBroadcast', 'This message will be sent to all users!');


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
  

    

