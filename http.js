const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('welcome to our home page')
    }
    if(req.url === '/about') {
        res.end('here is our short')
    }
    res.end(`
    <h1>oops</h1>
    <p>their is a</p>
    <a href="/about">back home</a>
    `)
})

server.listen(5000)