const { body } = require('express-validator');

exports.validateCategory = [
  body('name')
    .trim()
    .notEmpty().withMessage('Category name is required')
    .isLength({ min: 3 }).withMessage('Category must be at least 3 characters'),
];
