// No arquivo UserController.js

const path = require('path');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

exports.signupUser = async (req, res) => {
    const { nome, sobrenome, email, senha, celular } = req.body;
    try {
        const userPhone = await User.findOne({celular});
        const existingUser = await User.loginUser({ email })
        if (existingUser || userPhone) {
            return res.status(400).send("Email ou telefone já estão em uso");
        }

        const newUser = await User.createUser({ nome, sobrenome, email, senha, celular });
        req.session.userId = newUser._id;
        res.redirect('/home');
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
};

exports.signinUser = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const user = await User.loginUser({ email });
        if (!user) {
            return res.status(404).send("Usuário não encontrado. Tente novamente");
        }

        const passwordMatch = await bcrypt.compare(senha, user.senha);
        if (!passwordMatch) {
            return res.status(401).send("Senha incorreta. Informe novamente");
        }
        req.session.userId = user._id;
        res.redirect('/home');
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
};
