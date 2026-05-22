const express = require("express");

const app = express();

app.get("/contact-us", (req, res, next) => {
  console.log("in the contact us page .");
  res.send(`<html>
    <form action="contact-us" method="POST" >
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="user_name" required><br><br>

  <!-- Contact/Email field -->
  <label for="email">Email Address:</label><br>
  <input type="email" id="email" name="user_email" required><br><br>

  <!-- Submit button -->
  <input type="submit" value="Submit">
</form>
  </html>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Form Submitted successfully", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("In the 2nd middleware", req.url, req.method);
  next();
});

app.use("/", (req, res) => {
  console.log("in the last middleware");
  res.send("<html>In the last middleware where response is send</html>");
});

const port = 5005;
app.listen(port, () => {
  console.log(`server running on address http://localhost:${port}`);
});
