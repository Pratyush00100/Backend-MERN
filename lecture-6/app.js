const http = require("http");
const myServer = http.createServer((req, res) => {
  console.log(req);
});

const port = 3000;
myServer.listen(port, () => {
  //anonymous function , no arguments
  console.log(`server running on address http://localhost:${port}`);
});
