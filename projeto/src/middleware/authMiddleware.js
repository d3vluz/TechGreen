const mongoose = require('mongoose');

exports.isAuthenticated = async (req, res, next) => {
    if (req.session.userId) {
        return next();
    } else {
        res.redirect('/loginpage'); 
    }
}


