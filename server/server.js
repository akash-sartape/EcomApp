const express = require("express");
const app = express();
const usercontroller = require("./user/routes/user");
const mongoose = require("mongoose");
const ordercontroller =require("./user/routes/order");
const cartcontroller = require("./user/routes/cart");
const cors = require("cors")


mongoose.connect("mongodb://localhost/ecommerse" , (data)=>{
   console.log("Connected to database")
},(err)=>{
    console.log(err)
})
 
//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.listen(3001,(err,res)=>{
   if(err){
    console.log(err.message)
   }
   else{
    console.log("Server started at port 3001 ")
   }
})

app.get("/",(req,res)=>{
    res.send("Ecom backend")
})

//middleware
app.use("/user",usercontroller);
app.use("/order",ordercontroller);
app.use("/cart", cartcontroller)