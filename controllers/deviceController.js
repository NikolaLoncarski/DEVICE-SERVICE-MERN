const Device = require("../model/deviceModel");
const controllerFactory = require("./controllerFactory");
const tryCatch = require("../utils/tryCatch");

exports.getOneDevice = tryCatch(async (req, res, next) => {
  const doc = await Device.findById(req.params.id)
    .populate("deviceBrandName")
    .populate("deviceModelName");

  res.status(200).json({
    status: "success",
    doc,
  });
});

exports.createDevice = controllerFactory.createOne(Device);
exports.deleteDevice = controllerFactory.deleteOne(Device);
exports.getAllDevices = controllerFactory.getAll(Device);
