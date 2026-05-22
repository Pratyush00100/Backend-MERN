const express = require("express");
const storeController = require("../controllers/storeController");
const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/store/bookings", storeController.getBookings);
storeRouter.get("/store/favourite-list" , storeController.getFavourites)
storeRouter.get("/home" , storeController.getHome)


module.exports = storeRouter;
