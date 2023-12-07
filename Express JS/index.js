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

//manipulating response status
app.get("/admin",function(req,res){
    res.status(401).end("You are not authorized yet!")
})

//json response
app.get("/products",function(req,res){

    let JsonArray=[{Name:'Headphone', Price:'20$', Gurantee:"Yes"},{Name:'Keyboard', Price:'30$', Gurantee:"No"},{Name:'Mouse', Price:'15$', Gurantee:"Yes"},{Name:'Monitor', Price:'40$', Gurantee:"Yes"},{Name:'Table', Price:'100$', Gurantee:"No"}
]

    res.json(JsonArray);
})

//generating download
app.get("/download",function(req,res){
    res.download("./images/hack.png")
})

//redirecting 

app.get("/redirect",function(req,res){
    res.redirect("http://localhost:8000/redirected")
})

app.get("/redirected",function(req,res){
    res.send("You were redirected in this website.")
})

//add data in header

app.get("/header",function(req,res){

    res.append("Name","Nabil Shartaj")
    res.append("Age","24")
    res.status(201).end("Check postman for header data")
})

//set cookies
app.get("/cookies",function(req,res){

    res.cookie("Name","Nabil Shartaj")
    res.cookie("Age","24")
    res.status(201).end("Cookie was set. Check postman or inspect element in your browser.")
})

//clear cookies
app.get("/clearCookie",function(req,res){

    res.clearCookie("Name")
    res.clearCookie("Age")
    res.end("Cookie is cleared. Check postman or inspect element.")
})




//port listening and server check

app.listen(8000, function(){
    console.log("Server is running!")
})