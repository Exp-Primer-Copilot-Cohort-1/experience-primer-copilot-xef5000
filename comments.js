// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controllers
const commentsController = require('../controllers/commentsController');

// Import middlewares
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');

// CRUD
router.get('/', commentsController.index);
router.post('/', auth, upload, commentsController.store);
router.get('/:id', commentsController.show);
router.put('/:id', auth, upload, commentsController.update);
router.delete('/:id', auth, commentsController.destroy);

module.exports = router;