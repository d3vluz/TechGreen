const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuthenticated = require('../middleware/authMiddleware');

router.get('/perfil', isAuthenticated.isAuthenticated, userController.getProfile);

module.exports = router;