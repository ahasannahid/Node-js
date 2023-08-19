let fs = require('fs');
let http = require('http');


const server = http.createServer(function (req,res){
    if(req.url='/'){

        // async(
        fs.readFile('home.html', function(error, data){
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data);
            res.end();
        })
    }



});

server.listen(4040);
console.log('Server running successfully')