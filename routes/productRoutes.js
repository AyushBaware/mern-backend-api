const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProducts,
    deleteProduct
} = require('../controllers/productController');

const protect = require('../middlewares/authMiddleware');
const adminOnly = require('../middlewares/adminMiddleware');
const validateProduct = require('../middlewares/validateProduct');
const upload = require('../middlewares/uploadMiddleware');

// Public
router.get('/', getProducts);

// Upload image
router.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Image uploaded successfully',
        file: req.file,
        imageUrl: `/uploads/${req.file.filename}`
    });
});

// Protected + Admin
router.post('/', protect, adminOnly, validateProduct, createProduct);
router.delete('/:id', protect, adminOnly, deleteProduct);

module.exports = router;