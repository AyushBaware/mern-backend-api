const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser
} = require('../controllers/userController');

const validateUser = require('../middlewares/validateUser');
const protect = require('../middlewares/authMiddleware');

// Routes
router.post('/register',validateUser, registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', protect, (req, res) => {
    res.json({
        message: 'Profile data',
        user: req.user
    });
});

module.exports = router;