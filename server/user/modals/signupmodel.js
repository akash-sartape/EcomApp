const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true,
        validate : {
        validator : (value)=>{
                    
                       if(String(value).length==10){
                        return true
                       }
                       else{
                        return false
                       }
                  },
        message : (props)=>{ props +"Invalid it should be 10 digit"

        }
       }
    },
    password : {
        type:String,
        requred: true,
        minLength:3
    }
});

const signupModel = mongoose.model("usersignup",signupSchema);
module.exports=signupModel