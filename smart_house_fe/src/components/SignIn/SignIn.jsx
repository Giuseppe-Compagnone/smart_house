import "./SignIn.css";
import { useState } from "react";

const SignIn = (props) =>{

const [ sign , setSign] = useState({email:"",psw:"",confirm:""});
const [ error , setError] = useState("");

    return(
        <>
            <h1>Welcome, please Sign in</h1>
            <p className="error">{error}</p>
            <form>
                <label htmlFor="email">Email</label>
                <input className="input" type="email" name="email" placeholder="Your Email" onChange={(e)=>{setSign({...sign,email:e.target.value})}} value={sign.email} required />
                <label htmlFor="">Password</label>
                <input className="input" type="password" name="psw" placeholder="Your Password" onChange={(e)=>{setSign({...sign,psw:e.target.value})}} value={sign.psw} required />
                <label htmlFor="confirm">Confirm Password</label>
                <input className="input" type="password" name="confirm" placeholder="Confirm your Password" onChange={(e)=>{setSign({...sign,confirm:e.target.value})}} value={sign.confirm} required />
                <input type="submit" value="Submit"/>
            </form>
            <a href="#" id="log-in" onClick={()=>props.set(true)}>Do have an account? Log in</a>
        </>
    )
}

export default SignIn;