const { body } = require('express-validator');

exports.validatePost = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),

  body('body')
    .trim()
    .notEmpty().withMessage('Body is required'),

  body('category')
    .notEmpty().withMessage('Category is required')
];
