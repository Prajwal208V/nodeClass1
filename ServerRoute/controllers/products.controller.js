const products=require('../module/products.Modle');

function getProducts(req,res){
    res.status(200).json(products);
}
function postProducts(req,res){
    products.push(req.query);
    res.status(200).send(req.query);
}

module.exports={getProducts, postProducts};