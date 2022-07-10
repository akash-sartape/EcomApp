import { useState } from "react";
import axios from "axios";

const Login = ()=>{
const [LoginInfo,setlogininfo]= useState({username:"",password:""});

const HandleLogin = ()=>{
    // console.log(LoginInfo);
    axios({
        url : "http://localhost:3001/user/login",
        method:"POST",
        headers :{

        },
        data : LoginInfo
    }).then((res)=>{ console.log(res.data.Welcome);
                    alert(res.data.Welcome) })
                    
    .catch((err)=>{ console.log(err.response.data) 
                    alert(err.response.data)})
  
}

const Handleusername = (e)=>{
    setlogininfo({username:e.target.value})
}
const Handlepassword = (e)=>{
    setlogininfo({...LoginInfo,password:e.target.value})
}
    return(
        <div>
            <div>
                <div>
                   <label for="username">Username :</label>
                </div>
                <div>
                    <input type="text" id="username" onChange={(e)=>{Handleusername(e)}}></input>
                </div>    
            </div>
            <div>
                <div>
                   <label for="password">Password :</label>
                </div>
                <div>
                    <input type="text" id="password" onChange={(e)=>{Handlepassword(e)}}></input>
                </div>    
            </div>
            <button type="button" onClick={HandleLogin}>Login</button>
        </div>
    )
}

export default Login