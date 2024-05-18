
const path = require('path');
const bcrypt = require('bcryptjs');
const Product = require('../models/productModel');

exports.insertProduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
        await Product.createProduct({ name, price, description });
        res.redirect('/home');
    } catch (error) {
        res.status(500).send("Erro interno do servidor ao cadastrar produto");
    }
};
