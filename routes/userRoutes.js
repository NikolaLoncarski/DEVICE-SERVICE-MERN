const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authenticationController");
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);

router.get("/getusers", userController.getAllUsers);
module.exports = router;
