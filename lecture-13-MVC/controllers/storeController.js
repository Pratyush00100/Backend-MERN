const Home = require("../model/home");

exports.getHome = (req, res, next) => {
  const regHomes = Home.fetchAll((regHomes) => {
    res.render("store/home-list", {
      regHomes: regHomes,
      pageTitle: "Airbnb Home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  const regHomes = Home.fetchAll((regHomes) => {
    res.render("store/bookings", {
      regHomes: regHomes,
      pageTitle: "My Bookings",
    });
  });
};

exports.getFavourites = (req, res, next) => {
  const regHomes = Home.fetchAll((regHomes) => {
    res.render("store/favourite-list", {
      regHomes: regHomes,
      pageTitle: "Favourites",
    });
  });
};

exports.getIndex = (req, res, next) => {
  const regHomes = Home.fetchAll((regHomes) => {
    res.render("store/index", {
      regHomes: regHomes,
      pageTitle: "Index",
    });
  });
};

exports.pathError = (req, res, next) => {
  res.status(404).render("error");
  console.log("in last handler middleware", req.url, req.method);
};
