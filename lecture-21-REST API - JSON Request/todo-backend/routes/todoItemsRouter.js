const express = require("express");
const todoController = require("../controllers/todoController");
const { todo } = require("node:test");
const todoRouter = express.Router();

todoRouter.get("/item", todoController.getAllItems);
todoRouter.post("/item", todoController.createItem);
todoRouter.delete("/item/:id", todoController.deleteItem);
todoRouter.put("/item/:id/completed", todoController.markCompleted);


module.exports = todoRouter;
