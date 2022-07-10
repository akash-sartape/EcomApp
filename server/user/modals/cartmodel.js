const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    itemId : {
        type:String,
        required: true
    }
});

const cartModel = mongoose.model("carts",cartSchema);
module.exports=cartModel;