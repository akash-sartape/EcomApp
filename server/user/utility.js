const signupModel = require("./modals/signupmodel");
const bcrypt = require("bcryptjs")

 const CheckExistingUser = async (username)=>{
    let existinguser=false
  await  signupModel.find({username:username}).then((userdata)=>{
        if(userdata.length){
            existinguser=true
        }
    })

    return existinguser
}

const CreateHashPassword = (password)=>{
 const salt=10;
 return new Promise((resolve,reject)=>{
    bcrypt.genSalt(salt).then((hashsalt)=>{
        
        bcrypt.hash(password,hashsalt).then((saltpassword)=>{
            
             resolve(saltpassword)
        }).catch((err)=>{ reject(err)})
    })
 })

}

module.exports={CheckExistingUser,CreateHashPassword};
