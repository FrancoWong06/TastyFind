const mongoose = require("./../db.js");

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("restaurants", restaurantSchema);
