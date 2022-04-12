const express=require('express');
const productsRouter=express.Router();
const productsController=require('../controllers/products.controller');


productsRouter.route('/products')
      .get(productsController.getProducts)
      .post(productsController.postProducts)

module.exports =productsRouter;