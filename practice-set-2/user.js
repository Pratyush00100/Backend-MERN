const fs = require("fs");

const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log("1. IN sum requestHandler");
  let result;

  if (req.url === "/") {
    res.write(`<html>Welcome to Home Page</html>`);
    res.write(`<a href="/calculator">To Calculator</a>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.write(`<html>
      <body>
        <form action="/calculate-result" method="POST">
          <label for="a">Number A:</label>
          <input type="number" id="a" name="a" required><br><br>
          <label for="b">Number B:</label>
          <input type="number" id="b" name="b" required><br><br>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>`);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log("2. data chunk coming");
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("3. end event running");
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      const a = Number(bodyObj.a);
      const b = Number(bodyObj.b);
      result = a + b;
      console.log(result);
      return res.end();
    });
  }

  console.log("4. Sending the response");
  res.setHeader = ("Content-Type", "text/html");
  res.write(`
      <html>
        <head><title> Practice Set </title></head>
        <body>
          your sum is ${result}
        </body>
      </html>
    `);
};

module.exports = requestHandler;
