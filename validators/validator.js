const {
    body,
    validationResult
} = require('express-validator');

const userValidationRules = () => {
    return [
        // body('email')
        // .isEmail()
        // .exists()
        // .normalizeEmail()
        // .withMessage('Do you call this an email?'),
        // body('password')
        // .isLength({
        //     min: 10
        // })
        // .withMessage('Your password should be 10 characters long'),
        body('name').trim()
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