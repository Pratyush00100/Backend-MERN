const express = require("express");
const path = require("path");
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtil')


hostRouter.get("/add-home", (req, res, next) => {
  console.log("Inside add-home handler", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log("Home added successfully");
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

module.exports = hostRouter;
