const express = require("express");
const path = require("path");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");

hostRouter.get("/contact-us", (req, res, next) => {
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

hostRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body)
  console.log("Form Submitted successfully", req.url, req.method);
  res.send(`<html>
    Form submitted successfully
    <a href="/contact-us">Back to form</a>
  </html>`)
});

module.exports = hostRouter;