const {
    body,
    validationResult
} = require('express-validator');

const userValidationRules = () => {
    return [
        body('email')
        .isEmail()
        .exists()
        .normalizeEmail()
        .withMessage('This is not a valid email'),
        body('password')
        .isLength({
            min: 6
        })
        .withMessage('Your password should at least 6 characters long'),
        body('firstName').trim(),
        body('lastName').trim()
    ];
}

const userValidateErrorHandling = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next();
    }
    return res.status(422).json({
        errors: errors.array()
    });
}

module.exports = {
    userValidationRules,
    userValidateErrorHandling
}