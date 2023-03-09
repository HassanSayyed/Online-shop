const Product = require("../moduels/Product");
const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

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

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    // check if {id} is valid mongoose id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Invalid product id" });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Product not found" });
    }
    res.status(StatusCodes.OK).json({ product });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    // check if {id} is valid mongoose id
    if (!mongoose.isValidObjectId(id)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid ID" });
    }

    const { name, price, image, description, category } = req.body;

    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, image, description, category },
      { new: true }
    );

    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Product not found" });
    }

    res.status(StatusCodes.OK).json({ product });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  // check if {id} is valid mongoose id
  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid product ID" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Product not found" });
    }
    // delete is successful send 204 (no content)
    res.sendStatus(StatusCodes.NO_CONTENT);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
