// server creation, url module to parse URL

var http=require('http');
var url=require('url');


var server = http.createServer(function(req, res)
{   

    // request response model in detail, defining response

    if (req.url=='/'){

        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Welcome to the Home page</h1>')
         res.end();

    }
    else if (req.url=='/contact'){

        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Welcome to the Contact page</h1>')
        res.end();
    }
    
    else if (req.url=='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Welcome to the About page</h1>')
        res.end();
    }

});

server.listen(5050);

console.log("Server run successfully");

// ***************************************************


