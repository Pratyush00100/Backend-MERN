//core module
// const http = require("http");

//express , external module
const express = require("express");

const app = express();

app.get("/",(req, res, next) => {
  console.log("came in first middleware" , req.url , req.method);
  next();
  // res.send('<p>Pratyush</p>')
});
app.post("/submit",(req, res, next) => {
  console.log("came in second middleware" , req.url , req.method);
  // res.send('<html>"Hello Pratyush</html>')
  res.send("<html>hello pratyush</html>")
});
app.get("/",(req, res, next) => {
  console.log("came in another middleware" , req.url , req.method);
  res.send("<html>Came in Another middleware</html>")
  // res.send('<p>Pratyush</p>')
});
const userRequestHandler = require("./user");
// const myServer = http.createServer(app);

const port = 3000;
app.listen(port, () => {
  //anonymous function , no arguments
  console.log(`server running on address http://localhost:${port}`);
});
