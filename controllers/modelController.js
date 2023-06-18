const Model = require("../model/deviceSubModels/modelModel");
const controllerFactory = require("./controllerFactory");

exports.createModel = controllerFactory.createOne(Model);
exports.getModel = controllerFactory.getOne(Model);
exports.deleteModel = controllerFactory.deleteOne(Model);
exports.getAllModels = controllerFactory.getAll(Model);
