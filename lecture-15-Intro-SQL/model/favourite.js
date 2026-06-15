const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const favDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(id, callback) {
    Favourite.getFavourite((favourites) => {
      if (favourites.includes(id)) {
        callback("Home is already marked favourite");
      } else {
        favourites.push(id);
        fs.writeFile(favDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourite(callback) {
    fs.readFile(favDataPath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};
