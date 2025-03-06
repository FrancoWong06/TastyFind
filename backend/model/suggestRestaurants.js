const mongoose = require("./../db.js");

const suggestRestaurantSchema = mongoose.Schema({
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
  reason: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("suggestRestaurant", suggestRestaurantSchema);