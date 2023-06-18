const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  reason: {
    type: String,
    required: [true, "A reson must exist in order to service a device!"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
