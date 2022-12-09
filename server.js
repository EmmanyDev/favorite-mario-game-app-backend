const express = require('express');
const path = require('path');
const app = express();

const port = 3040;
const data = require("./data.json");    // JSON file



app.use(express.static(path.join(__dirname, "../final-project/")));

app.get('/api', (req, res) => {     // if the client (Vue.app) requests this path, the server will respond with json data
    res.json(data);
});

app.get('/', (req,res) => {     // If the client requests this path, the server will respond with the HTML file
    res.sendFile(path.join(__dirname, '../final-project/public/index.html'));
});

app.listen(port, () => {    // Link server to a port
    console.log(`Server listening on the port::${port}`);
});




















// const http = require('http');


// const path = require('path');
// const fs = require('fs');

// const host = 'localhost';
// const port = 8081 // try again with this change. Keep looking at logs for support
// // process.env.PORT || 8081;

// const server = http.createServer((req, res) => {
//     switch(req.url) {
//         case "/":
//             fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
//                 if (err) throw err;
//                 res.writeHead(200, {
//                     "Content-Type": "text/html",
//                     "Access-Control-Allow-Origin": "*"
//                 });
//                 res.end(data);
//             });
//             break;
//         case "/api":
//             fs.readFile(path.join(__dirname, "public", "data.json"), (err, data) => {
//                 if (err) throw err;
//                 res.writeHead(200, {
//                     "Content-Type": "application/json",
//                     "Access-Control-Allow-Origin": "*"
//                 });
//                 res.end(data);
//             });
//             break;
//         default:
//             res.end("<h1>Error 404: Page not found</h1>");
//     }
// })

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}/api`);
// })

// res.setHeader("Content-Type", "application/json");
// res.setHeader('Access-Control-Allow-Origin', '*');
// res.end(JSON.stringify(data["api"]));


