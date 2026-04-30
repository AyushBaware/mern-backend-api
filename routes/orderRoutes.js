const express = require('express');
const router = express.Router();

const {
    createOrder,
    getOrders
} = require('../controllers/orderController');

const protect = require('../middlewares/authMiddleware');

// Create order
router.post('/', protect, createOrder);

// Get orders
router.get('/', protect, getOrders);

module.exports = router;