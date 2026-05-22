const http = require("http");
const userRequestHandler = require('./user');
const myServer = http.createServer(userRequestHandler);

const port = 3000;
myServer.listen(port, () => {
  //anonymous function , no arguments
  console.log(`server running on address http://localhost:${port}`);
});