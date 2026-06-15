const db = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(user_name, location, price, rating, link, description, id) {
    this.user_name = user_name;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.link = link;
    this.description = description;
    this.id = id;
  }

  save() {
    return db.execute(
      "insert into homes (user_name, location, price, rating, link, description) values (?,?,?,?,?,?)",
      [
        this.user_name,
        this.location,
        this.price,
        this.rating,
        this.link,
        this.description,
      ],
    );
  }

  static findById(homeId) {
        return db.execute("select * from homes where id=?",[homeId]);

  }

  static fetchAll() {
    return db.execute("select * from homes");
  }

  static deleteById(homeId) {
        return db.execute("delete from homes where id=?",[homeId]);

  }
};
