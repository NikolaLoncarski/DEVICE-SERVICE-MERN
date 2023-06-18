const express = require("express");
const deviceController = require("../controllers/deviceController");
const router = express.Router();

router
  .route("/device")
  .post(deviceController.createDevice)
  .get(deviceController.getAllDevices);
router
  .route("/device/:id")
  .get(deviceController.getDevice)
  .delete(deviceController.deleteDevice);

module.exports = router;
