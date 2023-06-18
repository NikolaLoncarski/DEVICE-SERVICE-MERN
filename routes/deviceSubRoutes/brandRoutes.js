const express = require("express");
const brandController = require("../../controllers/brandController");
const router = express.Router();

router
  .route("/brand")
  .post(brandController.createBrand)
  .get(brandController.getAllBrands);

router
  .route("/brand/:id")
  .get(brandController.getBrand)
  .delete(brandController.deleteBrand);

module.exports = router;
