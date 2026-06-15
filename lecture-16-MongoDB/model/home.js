const { get_db } = require("../utils/databaseUtil");
const { ObjectId } = require("mongodb");

module.exports = class Home {
  constructor(user_name, location, price, rating, link, description, _id) {
    this.user_name = user_name;
    this.location = location;
    this.price = price;
    this.rating = rating;
    this.link = link;
    this.description = description;
    if (_id) {
      this._id = _id;
    }
  }

  save() {
    const db = get_db();
    if (this._id) {
      const updatedField = {
        user_name: this.user_name,
        locaiton: this.location,
        price: this.price,
        rating: this.rating,
        link: this.link,
        description: this.description,
      };

      return db
        .collection("homes")
        .updateOne({ _id: new ObjectId(String(this._id)) }, { $set: updatedField });
    } else {
      return db
        .collection("homes")
        .insertOne(this)
        .then((res) => {
          console.log(res);
        });
    }
  }

  static findById(homeId) {
    console.log(homeId);
    const db = get_db();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }

  static fetchAll() {
    const db = get_db();
    return db.collection("homes").find().toArray();
  }

  static deleteById(homeId) {
    console.log(homeId);
    const db = get_db();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
