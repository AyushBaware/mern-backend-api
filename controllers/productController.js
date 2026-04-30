const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

const getProducts = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, keyword, sort } = req.query;

  // 🔍 Search filter
  let filter = {};

  if (keyword) {
    filter.name = {
      $regex: keyword,
      $options: "i", // case-insensitive
    };
  }

  // 📄 Pagination
  const skip = (page - 1) * limit;

  // 📊 Query
  let query = Product.find(filter).skip(skip).limit(Number(limit));

  // 🔽 Sorting
  if (sort) {
    query = query.sort(sort);
  } else {
    query = query.sort("-createdAt");
  }

  const products = await query;

  const totalProducts = await Product.countDocuments(filter);

  res.status(200).json({
    success: true,
    page: Number(page),
    totalPages: Math.ceil(totalProducts / limit),
    totalProducts,
    products,
  });
});

// Improved code by removing try-catch
const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    message: "Product created",
    product,
  });
});

// DELETE PRODUCT
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
};
