const express = require('express');
const multer = require('multer');  
//form data are commented out. 
// var multer=multer();
const bodyParser=require('body-parser');


const app = express();
app.use(bodyParser.json());

// app.use(multer.array);
// app.use(express.static('public'));


//application middleware for every request

app.use(function(req,res,next){

    console.log("I am always coming in console log");
    next();
})


//get request anr route specific middleware
app.use("/home",function(req,res,next){
    console.log("I am always running in Homepage log only!")
    next();
})
app.get("/home",function(req,res){
    res.send("Homepage");
})

//catching url query parameter get method
app.get("/query",function(req,res){

    let firstName=req.query.firstName;
    let lastName=req.query.lastName;

    res.end("Received value- "+firstName+' '+lastName)
})


//get request header
app.get("/header",function(req,res){

    let firstName=req.header('firstName');
    let lastName=req.header('lastName');

    res.end("Received value- "+firstName+' '+lastName)
})


//intro to post, use postman to examine post requests


app.post("/post",function(req,res){
    res.send("Homepage");
})

//catching url query parameter post method

app.post("/post_query",function(req,res){

    let firstName=req.query.firstName;
    let lastName=req.query.lastName;

    res.end("Received value- "+firstName+' '+lastName)
})


//get request header post method

app.post("/post_header",function(req,res){

    let firstName=req.header('firstName');
    let lastName=req.header('lastName');

    res.send("Received value- "+firstName+' '+lastName)
})

//JSON Body post

app.post("/json",function(req,res){

    let jsonData=req.body;
    let jsonString=JSON.stringify(jsonData);
    res.send(jsonString);
})

//working with form data 

// app.post("/form",function(req,res){

//     let jsonData=req.body;
//     let jsonString=JSON.stringify(jsonData);
//     res.send(jsonString);
// })

//file upload

var fileStorage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, './uploads');
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname);
    }
});

var upload = multer({ storage: fileStorage }).single('myfile');
app.post("/upload", function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.end("Uploading failed!");
        } else {
            res.end("File uploaded successfully!");
        }
    });
});




app.listen(9000,function(){
    console.log("Server is running!")
})
