const modelController = require("../../controllers/modelController");
const express = require("express");

const router = express.Router();

router
  .route("/model")
  .post(modelController.createModel)
  .get(modelController.getAllModels);

router
  .route("/model/:id")
  .get(modelController.getModel)
  .delete(modelController.deleteModel);

module.exports = router;
