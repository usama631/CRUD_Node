const express = require("express");
const Product = require("../models/productModel");
const {
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProduct,
} = require("../controllers/productController");
const router = express.Router(); // To use router

//routes

//Get All Products from Database
router.get("/", getProducts);
//Get Product By ID from database
router.get("/:id", getSingleProduct);

//Update a Product By ID from database
router.put("/:id", updateProduct);
//Delete a Product By ID from database
router.delete("/:id", deleteProduct);

//Post data in database
router.post("/", createProduct);

module.exports = router;
