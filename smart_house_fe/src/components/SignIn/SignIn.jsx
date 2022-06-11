import "./SignIn.css";
import { useState } from "react";
import Axios from "axios";

const SignIn = (props) =>{

const [ sign , setSign] = useState({email:"",psw:"",confirm:""});
const [ error , setError] = useState("");

const handleEmailCheck = (res) =>{
    if(res){
        if(res.data==="check"){
            Axios.post("http://192.168.0.69:3001/create-user",sign).then(()=>{console.log("success")});
            props.set(true);
        }
        if(res.data==="exist"){
            setError("Email already exists");
        }
    }
}

const handleSubmit = () => {
    if(sign.confirm!==sign.psw){
        setError("Passwords doesn't match");
        return;
    }

    Axios.post("http://192.168.0.69:3001/check-email",{email:sign.email}).then((res)=>{handleEmailCheck(res)});  
}


    return(
        <>
            <h1>Welcome, please Sign in</h1>
            <p className="error">{error}</p>
            <form onSubmit={()=>handleSubmit()}>
                <label htmlFor="email">Email</label>
                <input className="input" type="email" name="email" placeholder="Your Email" onChange={(e)=>{setSign({...sign,email:e.target.value})}} value={sign.email} required />
                <label htmlFor="">Password</label>
                <input className="input" type="password" name="psw" placeholder="Your Password" onChange={(e)=>{setSign({...sign,psw:e.target.value})}} value={sign.psw} required />
                <label htmlFor="confirm">Confirm Password</label>
                <input className="input" type="password" name="confirm" placeholder="Confirm your Password" onChange={(e)=>{setSign({...sign,confirm:e.target.value})}} value={sign.confirm} required />
                <input type="submit" value="Submit"/>
            </form>
            <a href="#" id="log-in" onClick={()=>props.set(true)}>Do you have an account? Log in</a>
        </>
    )
}

export default SignIn;