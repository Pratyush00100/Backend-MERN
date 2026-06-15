const express = require("express");
const storeController = require("../controllers/storeController");
const storeRouter = express.Router();

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/store/bookings", storeController.getBookings);
storeRouter.get("/favourites" , storeController.getFavouritesList)
storeRouter.get("/home" , storeController.getHome)
storeRouter.get("/home/:homeId",storeController.getHomeDetails)
storeRouter.post("/favourites" , storeController.postAddToFavourites)


module.exports = storeRouter;
