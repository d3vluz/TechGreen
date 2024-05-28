const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/shoppage', productController.getProducts);
router.get('/product/:id', productController.getProductById);

module.exports = router;