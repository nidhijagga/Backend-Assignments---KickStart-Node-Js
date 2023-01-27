const http = require('http');
const routes = require('./task9Routes');
const server = http.createServer(routes.handler);
console.log(routes.someText);
server.listen(3000);