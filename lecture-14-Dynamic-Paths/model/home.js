const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const homeDataPath = path.join(rootDir, "data", "homes.json");

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
      //edit home case

      if (this.id) {
        regHomes = regHomes.map((home) => {
          if (home.id === this.id) {
            return this;
          }
          return home;
        });
      } else {
        //add home case
        this.id = Math.random().toString();
        regHomes.push(this);
      }

      fs.writeFile(homeDataPath, JSON.stringify(regHomes), (error) => {
        console.log("file writing concluded", error);
      });
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }

  static deleteById(homeId, callback) {
    this.fetchAll((homes) => {
      homes = homes.filter((home) => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), callback);
    });
  }
};
