const express = require("express");
const path = require("path");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  console.log("Inside add-home handler", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});
hostRouter.use(express.urlencoded());

const regHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home added successfully");
  console.log(
    "home registration successfull for : ",
    req.body,
    req.body.user_name,
  );
  const { user_name, location, price, rating, link } = req.body;
  regHomes.push({
    user_name: user_name,
    location: location,
    price: price,
    rating: rating,
    link: link,
  });
  res.render("homeAdded");
});

exports.hostRouter = hostRouter;
exports.regHomes = regHomes;
