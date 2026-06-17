//externam module express
const express = require("express");
const path = require("path");
const rootDir = require("./utils/pathUtil");
const { pathError } = require("./controllers/storeController");
const { default: mongoose } = require("mongoose");
const errorController = require("./controllers/errors");
const DB_PATH =
  "mongodb+srv://pratyush:root@cluster0.sigqsdh.mongodb.net/?appName=Cluster0/airbnb";

const app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));
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
