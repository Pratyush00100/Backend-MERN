const Home = require("../model/home");

exports.getAddHome = (req, res, next) => {
  console.log("Inside add-home handler", req.url, req.method);
  res.render("host/addHome");
};

exports.postAddHome = (req, res, next) => {
  console.log("Home added successfully");
  console.log("home registration successfull for : ", req.body.user_name);
  const { user_name, location, price, rating, link } = req.body;
  const home = new Home(user_name, location, price, rating, link);
  home.save();
  res.render("host/home-added");
};

exports.getHostHome = (req, res, next) => {
  const regHomes = Home.fetchAll((regHomes) => {
    res.render("host/host-home-list", {
      regHomes: regHomes,
      pageTitle: "Host Home List",
    });
  });
};

exports.pathError = (req, res, next) => {
  res.status(404).render("error");
  console.log("in last handler middleware", req.url, req.method);
};
