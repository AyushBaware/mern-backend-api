const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        'string.empty': 'Product name is required',
        'any.required': 'Product name is required'
    }),

    price: Joi.number().greater(0).required().messages({
        'number.base': 'Price must be a number',
        'number.greater': 'Price must be greater than 0',
        'any.required': 'Price is required'
    }),

    inStock: Joi.boolean()
});

module.exports = productSchema;