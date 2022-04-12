const items=require('../module/item.Modle');

function getItems(req,res){
    console.log(req.ip);
    res.status(200).json(items);
}
function postItems(req,res){
    items.push(req.query)
    res.status(200).send(req.query);
}

module.exports={getItems, postItems};
