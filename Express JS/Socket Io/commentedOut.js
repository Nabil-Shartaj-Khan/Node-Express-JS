      
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