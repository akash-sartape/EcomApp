const express = require("express");
const router = express.Router();
const signupModel = require("../modals/signupmodel");
const {CheckExistingUser,CreateHashPassword} = require("../utility");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const salt=10;
const secretKey = crypto.randomBytes(64).toString("hex");


router.post("/login",(req,res)=>{
  
  signupModel.find({username:req.body.username}).then((userdata)=>{
    if(userdata.length){
       bcrypt.compare(req.body.password,userdata[0].password).then((value)=>{
        if(value){
          const authtoken = jwt.sign(userdata[0].username,secretKey);
          res.status(200).send({authtoken , "Welcome":"Login successfull"});
          
        }else{
          res.status(400).send("Wrong password")

        }
       })
    }
    else{
      res.status(400).send("unautorise User need to login first")
    }

  }).catch((err)=>{
    console.log(err.message)
     res.send("Unauthirize user")
  })
});

router.post("/signup",async(req,res)=>{
   if(await CheckExistingUser(req.body.username)){
    res.send(req.body.username +" username already exist")
          } else{
         bcrypt.genSalt(salt).then((salthash)=>{
                     bcrypt.hash(req.body.password,salthash).then((hashpassword)=>{
                      signupModel.create({username:req.body.username , phoneNumber:req.body.phoneNumber , password:hashpassword})
                      .then(()=>{res.status(200).send( req.body.username+" created susucessfully")})
                      .catch((err)=>{res.status(400).send(err.message+"It should be 10 digit")})
                               }).catch((err)=>{
                                console.log(err)
                               })
                                   }).catch((err)=>{
                                         console.log(err)
                                                 })
               
  }
    
  });

router.post("/logout",(req,res)=>{
    res.status(200).send("logout works")
  });
router.put("/updatepassword",(req,res)=>{
  signupModel.find({username:req.body.username}).then((user)=>{
      if(user){
            bcrypt.compare(req.body.oldpassword,user[0].password).then((iscomparetrue)=>{
              if(iscomparetrue){
                
                CreateHashPassword(req.body.newpassword).then((hashpass)=>{
                 
                  signupModel.updateOne({username:req.body.username,password:hashpass}).then(()=>{
                    res.status(400).send("Password update successfull")
                  })
                }).catch((err)=>{
                    res.status(400).send(err.message)
                })
                  
              }else{
                res.status(400).send("Wrong old password")
              }
            })
      }else{
         res.status(400).send("Unauthorize user need to login first")
      }
  })

});

router.delete("/deleteaccount/:username",(req,res)=>{
    signupModel.deleteOne({username:req.params.username}).then(()=>{
      res.send("user deleted successfully")
    }).catch((err)=>{
      res.send(err)
    })
})

  module.exports=router