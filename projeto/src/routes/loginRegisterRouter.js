const express = require('express');
const router = express.Router();
const path = require('path');

const user = require('../controllers/loginRegisterUserController');

router.post('/signup', user.signupUser);

router.post('/signin', user.signinUser);

module.exports = router;
