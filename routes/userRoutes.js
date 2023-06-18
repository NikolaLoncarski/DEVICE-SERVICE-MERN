const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authenticationController");
const router = express.Router();

router.post("/signup", authController.signUp);

module.exports = router;
