const express = require("express");
const path = require("path");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");
const { regHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  console.log(regHomes);
  res.render('home',{regHomes:regHomes , pageTitle:'Airbnb Home'})
});

module.exports = userRouter;
