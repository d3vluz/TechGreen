const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/loginpage.html'))
});

router.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
});
router.get('/loginpage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/loginpage.html'))
});
router.get('/aboutpage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/aboutpage.html'));
});
router.get('/shoppage', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/shoppage.html'));
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

module.exports = router;