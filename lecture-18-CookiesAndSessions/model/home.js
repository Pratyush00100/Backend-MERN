const mongoose = require("mongoose");

//_id is automatically added by mongoose

const homeSchema = mongoose.Schema({
  user_name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  link: String,
  description: String,
});

module.exports = mongoose.model("Home", homeSchema);

/**
 
    save() 
    findById(homeId)
    find()
    deleteById(homeId)
 */
