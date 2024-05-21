const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuthenticated = require('../middleware/authMiddleware'); // Importa o middleware de autenticação

router.get('/perfil', isAuthenticated.isAuthenticated, userController.getProfile);

module.exports = router;