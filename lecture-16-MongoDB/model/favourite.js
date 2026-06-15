const { get_db } = require("../utils/databaseUtil");

module.exports = class Favourite {
  constructor(houseId) {
    this.houseId = houseId;
  }

  save() {
    const db = get_db();
    return db
      .collection("favs")
      .insertOne(this)
      .then((res) => {
        console.log(res);
      });
  }

  static getFavourite() {
    const db = get_db();
    return db.collection("favs").find().toArray();
  }

  static deleteById(delId) {
    console.log(homeId);
    const db = get_db();
    return db.collection("homes").deleteOne({ houseId: delId });
  }
};
