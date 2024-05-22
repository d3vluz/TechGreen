const express = require('express');
const router = express.Router();
const path = require('path');

const product = require('../controllers/productController');

router.get('/', product.getBestSellersAndGetTopRatedProducts);

router.get('/home', product.getBestSellersAndGetTopRatedProducts);

module.exports = router;