const http = require('http');

const server = http.createServer((req, res) => {
    console.log('client hits');
    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content-Type','text/html');
    res.write('<h1>hello harini</h1>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('server listen');
})