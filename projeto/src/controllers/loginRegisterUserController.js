// No arquivo UserController.js

const path = require('path');
const bcrypt = require('bcryptjs');
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
