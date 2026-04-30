const asyncHandler = require("express-async-handler");
const Order = require("../models/Order");

// CREATE ORDER
const createOrder = asyncHandler(async (req, res) => {
  const { user, product, quantity } = req.body;

  if (!user || !product || !quantity) {
    res.status(400);
    throw new Error("User, product and quantity are required");
  }

  const order = await Order.create({
    user,
    product,
    quantity,
  });

  res.status(201).json({
    success: true,
    message: "Order created successfully",
    order,
  });
});

// GET ALL ORDERS
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
    .populate("user", "name email")
    .populate("product", "name price");

  res.status(200).json({
    success: true,
    count: orders.length,
    orders,
  });
});

module.exports = {
  createOrder,
  getOrders,
};
