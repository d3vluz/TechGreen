const User = require('../models/UserModel');
const path = require('path');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.status(404).send("Usuário não encontrado.");
        }
        res.render(path.join(__dirname, '../views/perfilPageAccoutDetail.ejs'), { user });
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
    }
};
