const express = require('express');
const router = express.Router();

const product = require('../controllers/productController');

router.post('/productForm', product.insertProduct);
router.get('/products', product.uploadProducts); //rota para carregar os produtos na tela do usuário

module.exports = router;