const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    // Check if token exists in headers
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    // If no token
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get user from DB (exclude password)
        req.user = await User.findById(decoded.id).select('-password');

        next(); // allow access
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized, token failed');
    }
};

module.exports = protect;