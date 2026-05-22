const express = require("express");
const path = require("path");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");

//only mathces the exact path
userRouter.get("/", (req, res, next) => {
  console.log("In the 2nd middleware", req.url, req.method);
});

// //math path and the subpaths
// userRouter.use("/", (req, res) => {
//   console.log("in the last middpractice-set-5leware");
//   res.send("<html>In the last middleware where response is send</html>");
// });

module.exports = userRouter;
