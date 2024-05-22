const express = require('express');
const router = express.Router();
const product = require('../controllers/productController');

router.post('/productpage/productForm', product.insertProduct);

module.exports = router;