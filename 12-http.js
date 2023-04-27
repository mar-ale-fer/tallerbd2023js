const http = require('http')
const server = http.createServer((req, res)  => {
    if (req.url=== '/') { 
        res.end('WELCOME TO OUR HOME PAGE')
    } else if (req.url === '/about') {
        res.end('Here is our short history')

    }else {
        res.end(`
            <h1>OOPS!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `)
    }
})
server.listen(5000)         