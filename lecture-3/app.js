const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> welcome to home page </title></head>");
    res.write("<body>Pratyush Singh this is the home page</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> welcome to products page </title></head>");
    res.write("<body>Pratyush Singhhas this products page</body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> Complete pratyush </title></head>");
  res.write("<body>Pratyush Singh this is the default or last else blck code</body>");
  res.write("</html>");
  return res.end();
});

const port = 3000;
myServer.listen(port, () => {
  //anonymous function , no arguments
  console.log(`server running on address http://localhost:${port}`);
});
