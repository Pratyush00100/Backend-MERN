const Favourite = require("../model/favourite");
const Home = require("../model/home");

exports.getHome = (req, res, next) => {
  Home.fetchAll().then((regHomes) => {
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
  Home.fetchAll().then((regHomes) => {
    res.render("store/bookings", {
      regHomes: regHomes,
      pageTitle: "My Bookings",
    });
  });
};

exports.getFavouritesList = (req, res, next) => {
  Favourite.getFavourite().then((favourites) => {
    favourites = favourites.map(fav => fav.houseId);
    Home.fetchAll().then((regHomes) => {
      console.log(favourites, regHomes);
      const favHomes = regHomes.filter((home) => favourites.includes(home._id.toString()));
      res.render("store/favourite-list", {
        favHomes: favHomes,
        pageTitle: "Favourites",
      });
    });
  });
};

exports.postAddToFavourites = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite(homeId);
  fav
    .save()
    .then((res) => {
      console.log("fav added ", fav);
    })
    .catch((err) => {
      console.log("Error while making favourite ", err);
    })
    .finally(() => {
      res.redirect("./favourites");
    });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll()
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
