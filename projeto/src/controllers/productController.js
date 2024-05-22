const Product = require('../models/productModel');
const path = require('path');

exports.insertProduct = async (req, res) => {
    console.log('Request body:', req.body);
    const { name, image, price, description, rating } = req.body;
    const isBestSeller = req.body.isBestSeller === 'on';
    try {
        await Product.createProduct({ name, image, price, description, rating, isBestSeller });
        res.redirect('/productpage/12345678');
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send("Erro interno do servidor ao cadastrar produto");
    }
};

exports.uploadProducts = async (req, res) => {
      try {
        const products = await Product.showProducts();
        res.json(products);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if(products) {
            res.render(path.join(__dirname, '../views/shoppageProductDetails.ejs'), { products })
        } else {
            return res.status(404).send("Produtos não encontrados.");
        }
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
}

//----------------

exports.getBestSellers = async (req, res) => {
    try {
        const products = await Product.getBestSellers();
        if (products) {
            res.render(path.join(__dirname, '../views/shoppageProductDetails.ejs'), { products });
        } else {
            return res.status(404).send("Produtos não encontrados.");
        }
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
};

exports.getTopRatedProducts = async (req, res) => {
    try {
        const products = await Product.getTopRatedProducts();
        if (products) {
            res.render(path.join(__dirname, '../views/shoppageProductDetails.ejs'), { products });
        } else {
            return res.status(404).send("Produtos não encontrados.");
        }
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
};