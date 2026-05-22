const Home = require("../model/home");

exports.getAddHome = (req, res, next) => {
  console.log("Inside add-home handler", req.url, req.method);
  res.render("host/edit-home", {
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  console.log("Inside edit-home handler", req.url, req.method);
  const id = req.params.id;
  const editing = req.query.editing === "true";

  Home.findById(id, (home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-home-list");
    }
    console.log(id, editing, home);
    res.render("host/edit-home", {
      home: home,
      editing: editing,
    });
  });
};
exports.postEditHome = (req, res, next) => {
  console.log("Home edited successfully");
  console.log("home edition successfull for : ", req.body.id);
  const { id, user_name, location, price, rating, link } = req.body;
  const home = new Home(user_name, location, price, rating, link);
  home.id = id;
  home.save();
  res.redirect("/host/host-home-list");
};

exports.postAddHome = (req, res, next) => {
  console.log("Home added successfully");
  console.log("home registration successfull for : ", req.body.user_name);
  const { user_name, location, price, rating, link } = req.body;
  const home = new Home(user_name, location, price, rating, link);
  home.save();
  res.redirect("/host/host-home-list");
};

exports.getHostHome = (req, res, next) => {
  const regHomes = Home.fetchAll((regHomes) => {
    res.render("host/host-home-list", {
      regHomes: regHomes,
      pageTitle: "Host Home List",
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  const id = req.params.id;
  console.log("Inside Delete home Controller");
  Home.deleteById(id, (error) => {
    if (error) {
      console.log("error while deleteing", error);
    }
    res.redirect("/host/host-home-list");
  });
};

exports.pathError = (req, res, next) => {
  res.status(404).render("error");
  console.log("in last handler middleware", req.url, req.method);
};
