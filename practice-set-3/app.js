const http = require("http");
const myServer = http.createServer();

const port = 4173;
myServer.listen(port, () => {
  //anonymous function , no arguments
  console.log(`server running on address http://localhost:${port}`);
});