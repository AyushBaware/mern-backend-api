const userSchema = require('../validations/userValidation');

const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) {
        res.status(400);
        throw new Error(error.details[0].message);
    }

    next();
};

module.exports = validateUser;