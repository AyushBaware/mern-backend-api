const productSchema = require('../validations/productValidation');

const validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body);

    if (error) {
        res.status(400);
        throw new Error(error.details[0].message);
    }

    next();
};

module.exports = validateProduct;