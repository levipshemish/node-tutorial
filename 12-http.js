const http = require('http');

const server = http.createServer((request, response) =>{
    if(request.url === '/') {
        response.end('Welcome to our home page')
    } 
    if(request.url === '/about') {
        response.end('Here is a short history')
    } 
    response.end(`<h1>oops!</h1>
                    <p>we can't seem to find the page you are looking for</p>
                    <a href="/">back home</a>`)

})

server.listen(6000)