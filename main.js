const http = require('http');
const URL = require('url');

const server = http.createServer(function(req,res){
    // res.end("Hello world")
    if(req.url =='/'){
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('<h1>This is Home page</h1>')
        res.end();
    }
    else if(req.url =='/about'){
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('<h1>This is About page</h1>')
        res.end();
    }
    else if(req.url =='/contact'){
        res.writeHead(200,{'Content-type': 'text/html'})
        res.write('<h1>This is Contact page</h1>')
        res.end();
    }

    // const myURL = 'https://unique-recipe.web.app/blog';

    // var myURLObj = URL.parse(myURL,true);

    // var myHostname =  myURLObj.host;
    // var myPathname =  myURLObj.pathname;

    // res.writeHead(210,{'Content-type': 'text/html'});
    // res.write(myHostname);
    // res.write(myPathname);
    // res.end();
    
});

server.listen(5050);
console.log('Server running successfully')