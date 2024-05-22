const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/shoppage', productController.getProducts);

module.exports = router;