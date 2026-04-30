const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        'string.empty': 'User name is required',
        'any.required': 'User name is required'
    }),

    email: Joi.string().trim().required().messages({
        'string.empty': 'Email is required',
        'any.required': 'Email is required'
    }),

    password: Joi.string().trim().required().messages({
        'string.empty': 'password is required',
        'any.required': 'password is required'
    }),

    // isAdmin: Joi.boolean()
});

module.exports = userSchema;