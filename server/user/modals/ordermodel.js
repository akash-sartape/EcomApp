const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    orderId : {
        type : String,
        required : true
       
    },
    orderType : {
        type:String,
        requred: true
    },
    itemId : {
        type:String,
        required: true
    },
    OrderStatus:{
        type: String,
        required: true
    }
});

const orederModel = mongoose.model("order",orderSchema);
module.exports=orederModel;