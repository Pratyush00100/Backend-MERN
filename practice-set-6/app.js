const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routes/user");
const hostRouter = require("./routes/host");
const rootDir = require("./utils/pathUtil");

app.use(express.urlencoded());
app.use(hostRouter);
app.use(userRouter);

app.use((req, res, next) => {
  console.log("In 404 handler", req.url, req.method);
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const port = 5005;
app.listen(port, () => {
  console.log(`server running on address http://localhost:${port}`);
});
