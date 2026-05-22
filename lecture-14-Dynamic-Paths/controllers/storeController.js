const Favourite = require("../model/favourite");
const Home = require("../model/home");

exports.getHome = (req, res, next) => {
  const regHomes = Home.fetchAll((regHomes) => {
    res.render("store/home-list", {
      regHomes: regHomes,
      pageTitle: "Airbnb Home",
    });
  });
};
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/home");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "home-detail",
      });
    }
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

exports.getFavouritesList = (req, res, next) => {
  Favourite.getFavourite((favourites) => {
    Home.fetchAll((regHomes) => {
      const favHomes = regHomes.filter((home) => favourites.includes(home.id));
      res.render("store/favourite-list", {
        favHomes: favHomes,
        pageTitle: "Favourites",
      });
    });
  });
};

exports.postAddToFavourites = (req, res, next) => {
  console.log("Came to add to favourites ", req.body);
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite", error);
    }
    res.redirect("./favourites");
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
