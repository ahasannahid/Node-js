let fs = require('fs');
let http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url = '/') {
        // async(
        // fs.readFile('home.html', function(error, data){
        //     res.writeHead(200, {'content-type': 'text/html'});
        //     res.write(data);
        //     res.end();
        // })
        // synchronous
        let myData = fs.readFileSync('home.html');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(myData);
        res.end();
    }
});


const server1 = http.createServer(function (req, res) {
    if (req.url = '/') {

        // async
        // fs.writeFile('demo.txt', 'Welcome to node js', function (error) {
        //     if (error) {
        //         res.writeHead(200, { 'content-type': 'text/html' });
        //         res.write('file write fail');
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200, { 'content-type': 'text/html' });
        //         res.write('file write Success');
        //         res.end();
        //     }
        // });


        // synchronous
        let error = fs.writeFileSync('demoSync.txt', 'welcome to file sync');
        if (error) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('file write fail');
            res.end();
        }
        else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('file write Successfully');
            res.end();
        }

    }



});



const server2 = http.createServer(function (req, res) {
    if (req.url = '/') {
        // async
        // fs.rename('demo.txt', 'demoNew.txt', function (error) {
        //     if (error) {
        //         res.writeHead(200, { 'content-type': 'text/html' });
        //         res.write('file rename fail');
        //         res.end();
        //     }
        //     else{
        //         res.writeHead(200, { 'content-type': 'text/html' });
        //         res.write('file rename Successful');
        //         res.end();
        //     }
        // });


        // synchronous
        let error = fs.renameSync('demoSync.txt', 'newDemoSync.txt');
        if (error) {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('file rename fail');
            res.end();
        }
        else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write('file rename Successfully');
            res.end();
        }

    }



});





server2.listen(4040);
console.log('Server2 running successfully')