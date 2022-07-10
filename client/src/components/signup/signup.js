import { useState } from "react";
import axios from "axios"

const Signup =()=>{
    const [signupstate,setsignupstate] = useState({});

    const SignupFormData = [{attr:"username",type:"text",id:"username",label:"Username :"},
                            {attr:"phonenumber",type:"number",id:"phoneNumber",label:"Mobile-Number :"},
                            {attr:"password",type:"password",id:"password",label:"Password :"}];
    const Handlesignup = ()=>{
        // console.log(signupstate);
        axios({
            url : "http://localhost:3001/user/signup",
            method:"POST",
            headers :{

            },
            data : signupstate
        }).then((res)=>{ console.log(res.data);
                        alert(res.data) })
        .catch((err)=>{ console.log(err.response.data) 
                        alert(err.response.data)})
    }

    const Handleinputchange = (e,id)=>{
            setsignupstate({...signupstate,[id]:e.target.value})
    }

    return(<>
        {SignupFormData.map((formkey)=>{
            return(
                <div>
                    <form>
                        <div>
                            <label for={formkey.id}>{formkey.label}</label>
                        </div>
                        <div>
                            <input type={formkey.type} id={formkey.id} onChange={(e)=>{Handleinputchange(e,formkey.id)}}></input>
                        </div>
                    </form>
                    
                </div>
            )
        })}
        <button type="button" onClick={Handlesignup}>Submit</button>

    </>)                        
}
 export  default Signup;