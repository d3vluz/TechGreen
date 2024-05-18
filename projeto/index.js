var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const path = require('path');
const app = express();

require('dotenv').config();

const screensNavigationRouter = require('./src/routes/screensNavigationRouter');
const loginRegisterRouter = require('./src/routes/loginRegisterRouter')
const contactRouter = require('./src/routes/contactRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src', 'public')));

mongoose.connect("mongodb://localhost:27017/myDB");

app.use('/', screensNavigationRouter);
app.use('/', loginRegisterRouter);
app.use('/', contactRouter);


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...');
});