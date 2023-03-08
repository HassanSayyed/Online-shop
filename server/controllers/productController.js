const Product = require("../moduels/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    category: req.body.category,
  });

  try {
    const savedProduct = await product.save();
    res.status(StatusCodes.CREATED).json({ product: savedProduct });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(StatusCodes.OK).json({ products });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
