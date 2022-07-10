const express = require("express");
const router = express.Router();
const orderModel= require("../modals/ordermodel")

router.post("/add",(req,res)=>{
    orderModel.create({username:req.body.username,orderId:req.body.orderId,orderType:req.body.orderType,itemId:req.body.itemId,
        OrderStatus:req.body.OrderStatus}).then(()=>{
            res.status(200).send("Oreder placed Successfull").catch((err)=>{res.status(400).send(err)})
        })
});

router.delete("/cancelorder/:id",(req,res)=>{
    orderModel.remove({orderId:req.params.id}).then((userdata)=>{
        res.status(200).send("Order cancelled successfully");
        
    }).catch((err)=>{
        res.status(400).send(err+"You dont have this type of order")
       
    })
})


module.exports=router