const Brand = require("../model/deviceSubModels/brandModel");
const controllerFactory = require("./controllerFactory");

exports.createBrand = controllerFactory.createOne(Brand);
exports.getBrand = controllerFactory.getOne(Brand);
exports.deleteBrand = controllerFactory.deleteOne(Brand);
exports.getAllBrands = controllerFactory.getAll(Brand);
