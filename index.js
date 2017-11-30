var express = require('express');
var server = express();

const NEWLINE = '\n';
const PORT = 8098;
const PUBLIC = '/public';

/* Enabling CORS */
server.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

server.use('/', express.static(__dirname + PUBLIC));
server.listen(PORT);

console.log(NEWLINE + 'Static server is listening on localhost:' + PORT);
console.log(NEWLINE + 'Resources are available on http://localhost:' + PORT + PUBLIC);
