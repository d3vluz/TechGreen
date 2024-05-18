// No arquivo UserModel.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    celular: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    cart: [produtoSchema]
});

userSchema.statics.createUser = async function (userData) {
    const { nome, sobrenome, email, senha, celular } = userData;
    const hashedPassword = await bcrypt.hash(senha, 10);
    return this.create({
        nome,
        sobrenome,
        email,
        senha: hashedPassword,
        celular,
    });
};

userSchema.statics.loginUser = async function (userData) {
    const { email } = userData;
    return this.findOne({ email });
};

userSchema.methods.addProduto = function (produto) {
    this.cart.push(produto);
    return this.save();
};

module.exports = mongoose.model('User', userSchema);