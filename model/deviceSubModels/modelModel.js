const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  modelName: {
    type: String,
    required: [true, "A device must have a model"],
  },
});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;
