const express = require("express");
const router = express.Router();
const cartModel = require("../modals/cartmodel");


router.post("/add",(req,res)=>{
    cartModel.create({username:req.body.username,itemId:req.body.itemId}).then(()=>{
        res.status(200).send("Item added on cart successfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
});

router.delete("/remove/:id",(req,res)=>{
    cartModel.deleteOne({itemid:req.params.id}).then(()=>{
        res.status(200).send("Item on cart deleted successfully");
        
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports=router;
