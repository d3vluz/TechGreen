const express = require('express');
const router = express.Router();
const path = require('path');

/*router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.ejs'));
});
router.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.ejs'));
});*/
router.get('/perfilOrders', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/perfilPageOrders.html'));
});
router.get('/perfilPassword', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/perfilPagePassword.html'));
});
router.get('/loginpage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/loginpage.html'))
});
router.get('/aboutpage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/aboutpage.html'));
});
router.get('/blogpage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/blogpage.html'));
});
router.get('/contactpage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/contactpage.html'));
});
router.get('/cartpage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/cartpage.html'));
});
router.get('/itempage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/itempage.html'));
});
router.get('/productpage/12345678', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/productPage.html'))
});

module.exports = router;