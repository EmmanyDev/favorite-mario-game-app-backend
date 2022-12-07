const http = require('http');
// const data = require("./public/data.json");

const path = require('path');
const fs = require('fs');

const host = 'localhost';
const port = process.env.PORT || 8080 // try again with this change. Keep looking at logs for support
// process.env.PORT || 8081;

const server = http.createServer((req, res) => {
    switch(req.url) {
        case "/":
            fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html",
                    "Access-Control-Allow-Origin": "*"
                });
                res.end(data);
            });
            break;
        case "/api":
            fs.readFile(path.join(__dirname, "public", "data.json"), (err, data) => {
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html",
                    "Access-Control-Allow-Origin": "*"
                });
                res.end(data);
            });
            break;
        default:
            res.end("<h1>Error 404: Page not found</h1>");
    }
})

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}/api`);
})

// res.setHeader("Content-Type", "application/json");
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.end(JSON.stringify(data["api"]));