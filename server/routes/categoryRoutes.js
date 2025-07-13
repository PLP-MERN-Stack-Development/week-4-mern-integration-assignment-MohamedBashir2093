const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { validateCategory } = require('../validators/categoryValidator');
const handleValidationErrors = require('../middleware/validateMiddleware');
const authMiddleware = require('../middleware/authMiddleware'); // added

// Public route
router.get('/', categoryController.getAllCategories);

// Protected route
router.post('/', authMiddleware, validateCategory, handleValidationErrors, categoryController.createCategory);

module.exports = router;
