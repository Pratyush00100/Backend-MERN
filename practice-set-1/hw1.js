const { log } = require("console");
const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log(req.url,req.method);
  if (req.url === "/men") {
    res.write(`<html>
      hello Welcome to mens section .
    </html>`);
    return res.end();
  } else if (req.url === "/women") {
    res.write(`<html>
      Welcome to female section.
    </html>`);
    return res.end();
  } else if (req.url === "/kids") {
    res.write(`<html>
      kids are welcomed
    </html>`);
    return res.end();
  } else if (req.url === "/cart") {
    res.write(`<html>
      items in your cart are as follows...
    </html>`);
    return res.end();
  } else {
    res.write(`<html>
      this is myntra home page
    </html>`);
    return res.end();
  }
});

const port = 3001;
myServer.listen(port, () => {
  //anonymous function , no arguments
  console.log(`server running on address http://localhost:${port}`);
});
