const Favourite = require("../model/favourite");
const Home = require("../model/home");

exports.getHome = (req, res, next) => {
  Home.find().then((regHomes) => {
    res.render("store/home-list", {
      regHomes: regHomes,
      pageTitle: "Airbnb Home",
    });
  });
};
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
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
  Home.find().then((regHomes) => {
    res.render("store/bookings", {
      regHomes: regHomes,
      pageTitle: "My Bookings",
    });
  });
};

exports.getFavouritesList = (req, res, next) => {
  Favourite.find()
    .populate("homeId")
    .then((favourites) => {
      const favHomes = favourites.map((fav) => fav.homeId);
      res.render("store/favourite-list", {
        favHomes: favHomes,
        pageTitle: "Favourites",
      });
    });
};

exports.postAddToFavourites = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.findOne({ homeId: homeId })
    .then((existingFav) => {
      if (existingFav) {
        console.log("Already in favourite");
        return res.redirect("/favourites");
      }

      const fav = new Favourite({ homeId: homeId });
      return fav.save().then(() => {
        console.log("favourite added");
        return res.redirect("/favourites");
      });
    })
    .catch((err) => {
      console.log("Error while marking favourites.", err);
      next(err);
    });
};

exports.getIndex = (req, res, next) => {
  Home.find()
    .then((regHomes) => {
      res.render("store/index", {
        regHomes: regHomes,
        pageTitle: "Index",
      });
    })
    .catch((err) => {
      console.error("Database query failed in getIndex: ", err);
      // Pass the error to Express error-handling middleware
      next(err);
    });
};

exports.pathError = (req, res, next) => {
  res.status(404).render("error");
};
