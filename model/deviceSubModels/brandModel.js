const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: [true, "A device must have a brand name"],
  },
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
