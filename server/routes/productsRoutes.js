const express = require("express");
const Joi = require("joi");
const validateRequest = require("../middleware/validation");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productController");

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().uri().allow(""),
  description: Joi.string(),
  category: Joi.string(),
});

router
  .route("/")
  .get(getAllProducts)
  .post(validateRequest(productSchema), createProduct);

router
  .route("/:id")
  .get(getProductById)
  .patch(validateRequest(productSchema), updateProductById)
  .delete(deleteProductById);

module.exports = router;
