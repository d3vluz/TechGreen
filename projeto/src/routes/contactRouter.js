const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController')

router.post('/send_email', contactController.sendEmailForTechGreen);

module.exports = router;