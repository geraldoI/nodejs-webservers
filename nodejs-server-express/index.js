const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('Olá cliente');
});

server.listen(port, hostname, () => {
    console.log("Servidor está on!");
})