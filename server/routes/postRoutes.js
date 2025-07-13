const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { validatePost } = require('../validators/postValidator');
const handleValidationErrors = require('../middleware/validateMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);

// Protected routes
router.post('/', authMiddleware, validatePost, handleValidationErrors, postController.createPost);
router.put('/:id', authMiddleware, validatePost, handleValidationErrors, postController.updatePost);
router.delete('/:id', authMiddleware, postController.deletePost);

module.exports = router;
