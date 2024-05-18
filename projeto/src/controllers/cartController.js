const path = require('path');
const User = require('../models/UserModel');

exports.addProduto = async (req, res) => {
    const {  } = req.body;
    try {
        await User.createUser({ nome, sobrenome, email, senha, celular });
        res.redirect('/home');
    } catch (error) {
        res.status(500).send("Erro interno do servidor ao criar usuário");
    }
};
