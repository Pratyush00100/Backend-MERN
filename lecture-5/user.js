const { error } = require("console");
const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/form") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title> welcome to home page </title></head>");
    res.write("<body><h1>Enter your details :</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<label>Name: <input type="text" name="name" placeholder="enter your name"> </label><br/>',
    );
    res.write(
      '<label>Gender: <input type="radio" name="gender" value="male"> Male <input type="radio" name="gender" value="female"> Female</label> <input type="radio" name="gender" value="others"> Others<br/>',
    );
    res.write(
      '<label>Phone: <input type="tel" name="phone" placeholder = "mobile number" > </label><br/>',
    );

    res.write('<button type="submit">Submit</button>');

    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      // const bodyObj = {};
      const params = new URLSearchParams(fullBody);
      // for(const [key,value] of params.entries()){
      //   bodyObj[key] = value;

      // }

      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
      //here the event loop does the work
      //blocks everything
      // fs.writeFileSync("user.txt", JSON.stringify(bodyObj));

      fs.writeFile("data.txt", JSON.stringify(bodyObj), (error) => {
        console.log("data written successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/form");
        return res.end();
      });
    });
  } else {
    res.write(`<html> 404 Page NOT Found </html>`);
    return res.end();
  }
};

module.exports = userRequestHandler;
