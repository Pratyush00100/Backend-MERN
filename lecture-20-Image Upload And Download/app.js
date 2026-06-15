//externam module express
const express = require("express");
const path = require("path");
const storeRouter = require("./routes/storeRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const { pathError } = require("./controllers/storeController");
const { error, log } = require("console");
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRouter");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const DB_PATH =
  "mongodb+srv://pratyush:root@cluster0.sigqsdh.mongodb.net/?appName=Cluster0/airbnb";


const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded());

const store = new MongoDBStore({
  uri:DB_PATH,
  collection:"sessions"
})
app.use(
  session({
    secret: "pressure is privilage",
    resave: false,
    saveUninitialized: true,
    store:store,
  }),
);
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);
app.use(authRouter);
app.use(express.static(path.join(rootDir, "public")));

app.use(pathError);

const port = 5005;

mongoose
  .connect(
    "mongodb+srv://pratyush:root@cluster0.sigqsdh.mongodb.net/?appName=Cluster0/airbnb",
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
