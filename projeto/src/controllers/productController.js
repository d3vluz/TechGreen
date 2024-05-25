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
        const productsTotal = await Product.countDocuments({});
        if(products) {
            res.render(path.join(__dirname, '../views/shoppageProductDetails.ejs'), { products, productsTotal })
        } else {
            return res.status(404).send("Produtos não encontrados.");
        }
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
}

exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        const topProducts = await getFourProdutcs();
        if (!product) {
            return res.status(404).render('404', { message: 'Produto não encontrado' });
        }

        res.render(path.join(__dirname, '../views/itempage.ejs'), { product, topProducts })
    } catch (error) {
        res.status(500).render('error', { message: 'Erro ao buscar o produto' });
    }
};

let getFourProdutcs = async (req, res) => {
    try {
        const topProducts = await Product.aggregate([
            { $match: { isBestSeller: true } },
            { $sample: { size: 5 } }
        ])
        if (!topProducts) {
            return res.status(404).send("Produtos não encontrados.");
        }
        return topProducts
    } catch (error) {
        res.status(500).send("Erro no servidor");
    }
}

//----------------

exports.getBestSellersAndGetTopRatedProducts = async (req, res) => {
    try {
        const topRatedProducts  = await Product.getTopRatedProducts();
        const bestSellers  = await Product.getBestSellers();
        if (bestSellers || topRatedProducts ) {
            res.render(path.join(__dirname, '../../index.ejs'), { bestSellers, topRatedProducts  });
        } else {
            return res.status(404).send("Produtos não encontrados.");
        }
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
};
