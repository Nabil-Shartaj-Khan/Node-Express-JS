var express=require('express');


app=express();

//simple string response
app.get("/",function(req,res){
    res.send("Welcome to Simple string response method");
})
app.get("/contact",function(req,res){
    res.send("Welcome to Contact Page");
})
app.delete("/about",function(req,res){
    res.send("Welcome to About page");
})
app.get("/terms",function(req,res){
    res.send("Welcome to Terms page");
})

app.listen(8000, function(){
    console.log("Server is running!")
})