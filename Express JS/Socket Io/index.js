const express=require('express');
const http=require('http');
const {Server}=require('socket.io'); //importing socket io
app=express();

const expressServer=http.createServer(app);
const io=new Server(expressServer); //socket io server



app.get('/',function(req,res){

    res.sendFile(__dirname+"/index.html"); //__dirname=default directory
        
})


//checking socket connection 
io.on('connection',function(socket){
    console.log("A new user is connected!")



    //custom event
    socket.on('myName',function(msg){
        console.log(msg)

    })
    socket.on('disconnect',function(){
        console.log("User is disconnected!")
    })
})
//port selection
expressServer.listen(3000,function(){
    console.log("Server is running! PORT:3000")
})
