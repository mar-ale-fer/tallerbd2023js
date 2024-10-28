const http = require('http')
const fileSystem = require('fs')
const path = require('path')
const server = http.createServer((req, res)  => {
    var filePath = path.join(__dirname, 'index.html');
    var stat = fileSystem.statSync(filePath);

    var filePath2 = path.join(__dirname, 'botonhw.jpg');
    var stat2 = fileSystem.statSync(filePath);

    if (req.url=== '/') { 
        res.end('WELCOME TO OUR HOME PAGE')
    } else if (req.url === '/about') {
        res.end('Here is our short history')

    } else if (req.url === '/index') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': stat.size
        });
        var readStream = fileSystem.createReadStream(filePath);
        // We replaced all the event handlers with a simple call to readStream.pipe()
        readStream.pipe(res)
    } else if (req.url === '/boton') {
        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': stat2.size
        });
        var readStream = fileSystem.createReadStream(filePath2);
        // We replaced all the event handlers with a simple call to readStream.pipe()
        readStream.pipe(res)

    }else {
        res.end(`
            <h1>OOPS!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `)
    }
})
server.listen(5000)

