// No arquivo UserController.js

const path = require('path');
const bcrypt = require('bcryptjs');
const Product = require('../models/productModel');
const User = require('../models/UserModel');

exports.signupUser = async (req, res) => {
    const { nome, sobrenome, email, senha, celular } = req.body;
    try {
        await User.createUser({ nome, sobrenome, email, senha, celular });
        res.redirect('/home');
    } catch (error) {
        res.status(500).send("Erro interno do servidor ao criar usuário");
    }
};

exports.signinUser = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await User.loginUser({ email });
        if (!user) {
            return res.status(404).send("Usuário não encontrado");
        }

        const passwordMatch = await bcrypt.compare(senha, user.senha);
        if (!passwordMatch) {
            return res.status(401).send("Senha incorreta");
        }

        res.redirect('/home');
    } catch (error) {
        res.status(500).send("Erro interno do servidor ao fazer login");
    }
};


exports.addProduct = async (req, res) => {
    try {   
        const productoId = req.body.produtoId;
        const product = await Product.findProduct(productoId);
        
        if (product) {
            console.log("Produto encontrado:", product.name);
            res.status(200).json(product);
        } else {
            console.log("Produto não encontrado");
            res.status(404).json({ message: "Produto não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        res.status(500).json({ message: error.message });
    }
};