//externam module express
const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "error.html"));
  console.log("in last handler middleware", req.url, req.method);
});

const port = 5005;
app.listen(port, () => {
  console.log(`server running on address http://localhost:${port}`);
});
