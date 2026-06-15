const Home = require("../model/home");

exports.getAddHome = (req, res, next) => {
  console.log("Inside add-home handler", req.url, req.method);
  res.render("host/edit-home", {
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  console.log("Inside edit-home handler", req.url, req.method);
  const homeId = req.params.id;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found for editing");
      return res.redirect("/host/host-home-list");
    }
    res.render("host/edit-home", {
      home: home,
      editing: editing,
    });
  });
};
exports.postEditHome = (req, res, next) => {
  console.log("Home edited successfully");
  console.log("home edition successfull for : ", req.body.id);
  const { id, user_name, location, price, rating, link, description } =
    req.body;
  Home.findById(id)
    .then((home) => {
      home.user_name = user_name;
      home.location = location;
      home.price = price;
      home.rating = rating;
      home.link = link;
      home.description = description;
      home
        .save()
        .then((result) => {
          console.log("Home Updated", result);
        })
        .catch((err) => {
          console.log("Error while updating", err);
        });
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while finding home ", err);
    });
};

exports.postAddHome = (req, res, next) => {
  console.log("Home added successfully");
  console.log("home registration successfull for : ", req.body.user_name);
  const { user_name, location, price, rating, link, description } = req.body;
  const home = new Home({
    user_name,
    location,
    price,
    rating,
    link,
    description,
  });
  home.save().then(() => {
    console.log("home saved successfully !");
  });
  res.redirect("/host/host-home-list");
};

exports.getHostHome = (req, res, next) => {
  Home.find().then((regHomes) => {
    res.render("host/host-home-list", {
      regHomes: regHomes,
      pageTitle: "Host Home List",
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  const id = req.params.id;
  console.log("Inside Delete home Controller");
  Home.findByIdAndDelete(id)
    .then(() => {
      console.log("Home deleted successfully!")
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("error");
    });
};

exports.pathError = (req, res, next) => {
  res.status(404).render("error");
  console.log("in last handler middleware", req.url, req.method);
};
