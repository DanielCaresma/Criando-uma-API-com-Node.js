'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect(config.connetionString);

//Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

//carrega as rotas
const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute); // O que é isso e o que faz?
app.use('/orders', orderRoute);

module.exports = app;