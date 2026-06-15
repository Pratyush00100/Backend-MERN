const home = require("../model/home");
const Home = require("../model/home");
const User = require("../model/user");

exports.getIndex = async (req, res, next) => {
  console.log("Session value: ", req.session);
  const user = await User.findById(req.session.userId);

  Home.find()
    .then((regHomes) => {
      res.render("store/index", {
        regHomes: regHomes,
        pageTitle: "Index",
        isLoggedIn: req.isLoggedIn,
        user,
      });
    })
    .catch((err) => {
      console.error("Database query failed in getIndex: ", err);
      // Pass the error to Express error-handling middleware
      next(err);
    });
};
exports.getHome = async (req, res, next) => {
  const user = await User.findById(req.session.userId);

  Home.find().then((regHomes) => {
    res.render("store/home-list", {
      regHomes: regHomes,
      pageTitle: "Airbnb Home",
      isLoggedIn: req.isLoggedIn,
      user,
    });
  });
};
exports.getHomeDetails = async (req, res, next) => {
  const homeId = req.params.homeId;
  const user = await User.findById(req.session.userId);

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/home");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "home-detail",
        isLoggedIn: req.isLoggedIn,
        user,
      });
    }
  });
};

exports.getBookings = async (req, res, next) => {
  const user = await User.findById(req.session.userId);

  Home.find().then((regHomes) => {
    res.render("store/bookings", {
      regHomes: regHomes,
      pageTitle: "My Bookings",
      isLoggedIn: req.isLoggedIn,
      user,
    });
  });
};

exports.getFavouritesList = async (req, res, next) => {
  const user = await User.findById(req.session.userId).populate("favourites");
  res.render("store/favourite-list", {
    favHomes: user.favourites,
    pageTitle: "Favourites",
    isLoggedIn: req.isLoggedIn,
    user,
  });
};

exports.postAddToFavourites = async (req, res, next) => {
  const homeId = req.body.id;
  const user = await User.findById(req.session.userId).populate("favourites");
  if (!user.favourites.includes(homeId)) {
    user.favourites.push(homeId);
    user.save();
  }

  return res.redirect("/");
};

exports.postRemoveFromFavourites = async (req, res, next) => {
  const homeId = req.body.id;
  const user = await User.findById(req.session.userId).populate("favourites");
  if (user.favourites.includes(homeId)) {
    user.favourites = user.favourites.filter((fav) => fav != homeId);
    await user.save();
  }

  res.redirect("/favourites");
};

exports.pathError = async (req, res, next) => {
  const user = await User.findById(req.session.userId);
  res.status(404).render("error", { isLoggedIn: req.isLoggedIn, user });
  console.log("in last handler middleware", req.url, req.method);
};
