const http = require('http'); 

const server = http.createServer((req, res) => {

    let body = '';

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}\n`)

        Object.entries(req.headers).forEach(([key, val]) => {
            console.log(`${key}: ${val}`);
        });

        console.log(`\n${body}`);
    });

    res.end();
});

server.listen(3000);
