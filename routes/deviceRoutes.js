const express = require("express");
const deviceController = require("../controllers/deviceController");
const authenticationController = require("../controllers/authenticationController");
const router = express.Router();

router
  .route("/device")
  .post(deviceController.createDevice)
  .get(authenticationController.isLoggedIn, deviceController.getAllDevices);
router
  .route("/device/:id")
  .get(deviceController.getOneDevice)
  .delete(deviceController.deleteDevice);

module.exports = router;
