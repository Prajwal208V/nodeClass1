const express=require('express');
const itemRouter=express.Router();
const itemController=require('../controllers/items.controller');

const items=require('../controllers/items.controller');

itemRouter.route('/items')
      .get(itemController.getItems)
      .post(itemController.postItems)


module.exports=itemRouter;