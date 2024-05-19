const express = require('express');
const router = express.Router();

const User = require('../controllers/loginRegisterUserController');

router.post('/products/add', User.addProduct); //rota para add um produto ao carrinho

module.exports = router;