const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(user_name, location, price, rating, link) {
    this.user_name = user_name;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.link = link;
  }

  save() {
    Home.fetchAll((regHomes) => {
      regHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(regHomes), (error) => {
        console.log("file writing concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};
