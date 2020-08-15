const validator = require('./validator');
const { check } = require('express-validator/check');

class registerValidator extends validator {
    
    handle() {
        return [
            check('name')
                .not().isEmpty()
                .withMessage('فیلد نام نمی تواند خالی بماند')
                .isLength({ min : 5 })
                .withMessage('فیلد نام نمی تواند کمتر از 5 کاراکتر باشد'),

            check('email')
                .not().isEmpty()
                .withMessage('فیلد ایمیل نمی تواند خالی بماند')
                .isEmail()
                .withMessage('فیلد ایمیل معتبر نیست'),

            check('password')
                .not().isEmpty()
                .withMessage('فیلد پسورد نمی تواند خالی بماند')
                .isLength({ min : 8 })
                .withMessage('فیلد پسورد نمی تواند کمتر از 8 کاراکتر باشد'),
        ]
    }
}
module.exports = new registerValidator();

