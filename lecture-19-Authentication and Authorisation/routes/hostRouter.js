const express = require("express");
const hostRouter = express.Router();
const hostController = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome);

hostRouter.use(express.urlencoded());

hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list",hostController.getHostHome)
hostRouter.get("/edit-home/:id",hostController.getEditHome)
hostRouter.post("/edit-home",hostController.postEditHome)
hostRouter.post("/delete-home/:id",hostController.postDeleteHome)

exports.hostRouter = hostRouter;
