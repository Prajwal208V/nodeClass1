const express=require('express');
const Mainrouter=express.Router();

const itemRouter=require('./item.router');
const productsRouter=require('./product.router');

Mainrouter.use(itemRouter,productsRouter);


module.exports = Mainrouter;
