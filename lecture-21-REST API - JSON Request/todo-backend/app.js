//externam module express
const express = require("express");
const path = require("path");
const rootDir = require("./utils/pathUtil");
const { default: mongoose } = require("mongoose");
const errorController = require("./controllers/errors");
const todoRouter = require("./routes/todoItemsRouter");
const cors = require("cors");
const DB_PATH =
  "mongodb+srv://pratyush:root@cluster0.sigqsdh.mongodb.net/?appName=Cluster0/airbnb";

const app = express();
app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use("/api/todo", todoRouter);
app.use(errorController.pageNotFound);
const port = 5005;

mongoose
  .connect(
    "mongodb+srv://pratyush:root@cluster0.sigqsdh.mongodb.net/?appName=Cluster0/todo",
  )
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(port, () => {
      console.log(`server running on address http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to mongo: ", err);
  });
