// Create web server

// Import modules

const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Handle requests
router.get('/', commentsController.comments_list);
router.get('/create', commentsController.comments_create_get);
router.post('/create', commentsController.comments_create_post);
router.get('/:id/delete', commentsController.comments_delete_get);
