const Device = require("../model/deviceModel");
const controllerFactory = require("./controllerFactory");

exports.createDevice = controllerFactory.createOne(Device);
exports.getDevice = controllerFactory.getOne(Device);
exports.deleteDevice = controllerFactory.deleteOne(Device);
exports.getAllDevices = controllerFactory.getAll(Device);
