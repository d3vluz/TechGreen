var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const session = require('express-session'); 
const path = require('path');
const app = express();

require('dotenv').config();

let ejs = require('ejs');
app.set('view engine', 'ejs');

const screensNavigationRouter = require('./src/routes/screensNavigationRouter');
const loginRegisterRouter = require('./src/routes/loginRegisterRouter')
const contactRouter = require('./src/routes/contactRouter');
const perfilRouter = require('./src/routes/perfilRouter');
const productRouter = require('./src/routes/productRouter')
const registerProductRouter = require('./src/routes/registerProductRouter');
const homeRouter = require('./src/routes/homeRouter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src', 'public')));

mongoose.connect("mongodb://localhost:27017/myDB");

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
}));

app.use('/', screensNavigationRouter);
app.use('/', loginRegisterRouter);
app.use('/', contactRouter);
app.use('/', perfilRouter);
app.use('/', productRouter);
app.use('/', registerProductRouter);
app.use('/', homeRouter);


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...');
});

