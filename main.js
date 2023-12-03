// server creation

var http=require('http');


var server = http.createServer(function(req, res)
{   
    res.end("Hello Nabil");

});

server.listen(5050);

console.log("Server run successfully");

// ***************************************************


