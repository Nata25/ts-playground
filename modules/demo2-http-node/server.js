const http = require('http');
const path = require('path');
const app = require(path.resolve(__dirname, 'dist', 'script.js'));
const port = 3000;

const requestHandler = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  if (request.url === '/') {
    response.write(JSON.stringify(app.artPiece, undefined, 2), 'utf-8');
  }
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log(`Error occurred: ${err}`);
  }
});

console.log('------------------------------');
console.log(`Server is listening on ${port}`);
console.log('------------------------------');

// print some data to the node console
app.default();

