var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql=require('mysql');


var DbConfig={
    host:'localhost',
    user:'root',
    password:'',
    database:'university'
}

var con=mysql.createConnection(DbConfig);

con.connect(function(err){
    if(err){
        console.log("Database not connected!")
    }
    else{
        console.log("Database connected!")
        insertData(con);
        // deleteData(con);
        //updateData(con);
        //selectData(con);
    }
});

function insertData(con){

    let query= "INSERT INTO `students_list`(`name`, `department`, `phone_no`, `city`, `gender`) VALUES ('Nabil Shartaj Khan','CSE','01770438440','Dhaka','Male')"
    con.query(query,function(err){
        
        if(err){
            console.log("Error inserting data")
        }
        else{
            console.log("Data inserted! Check database.")
        }
    })


}

var server = http.createServer(function(req, res) {
    if (req.url == '/') {
        let data = fs.readFileSync('home.html', 'utf8');
        res.end(data);
    } else if (req.url == '/about') {
        let data = fs.readFileSync('about.html', 'utf8');
        res.end(data);
    } else if (req.url == '/contact') {
        let data = fs.readFileSync('contact.html', 'utf8');
        res.end(data);
    } else if (req.url == '/body') {
        let data = fs.readFileSync('body.html', 'utf8');
        res.end(data);
    } else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('404 Not Found');
    }
});

server.listen(5050);
console.log("Server running successfully");