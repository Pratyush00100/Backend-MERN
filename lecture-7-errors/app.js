// const http = require("http");
// const testingSyntax = require("./syntax");
// const myServer = http.createServer(testingSyntax)

// const port = 3000;
// myServer.listen(port, () => {
//   //anonymous function , no arguments
//   console.log(`server running on address http://localhost:${port}`);
// });

const http = require("http");
const userRequestHandler = require('./user');
const myServer = http.createServer(userRequestHandler);

const port = 3000;
myServer.listen(port, () => {
  //anonymous function , no arguments
  console.log(`server running on address http://localhost:${port}`);
});