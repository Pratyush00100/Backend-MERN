//externam module express
const express = require("express");
const path = require("path");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const { pathError } = require("./controllers/storeController");
const { error, log } = require("console");
const { default: mongoose } = require("mongoose");

// db.execute('select * from homes').then(([rows,fields])=>{
//   console.log("Getting from db ",rows)
// })
// .catch(error=>{
//   console.log('error while reading from record ',error)
// })

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, "public")));

app.use(pathError);

const port = 5005;


mongoose
  .connect(
    "mongodb+srv://pratyush:root@cluster0.sigqsdh.mongodb.net/?appName=Cluster0/airbnb",
  )
  .then(() => {
    console.log("Connected to Mongo")
    app.listen(port, () => {
      console.log(`server running on address http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("error while connecting to mongo: ", err);
  });
