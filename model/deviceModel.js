const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "A device must have a type"],
    },
    deviceBrandName: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Brand",
        required: [true, "A device must have a brand"],
      },
    ],
    deviceModelName: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Model",
        required: [true, "A device must have a model"],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Device = mongoose.model("Device", deviceSchema);

module.exports = Device;
