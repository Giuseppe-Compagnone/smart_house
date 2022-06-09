import "./Login.css";
import {useState} from "react";
import SignIn from "./../SignIn/SignIn";

const Login = (props) =>{

    const [ user , setUser ] = useState({email:"",psw:""});

    return(
        <>
        <h1>Welcome, please Log in</h1>
        <p id="error"></p>
        <form>
            <label htmlFor="email"></label>
            <input className="input" type="email" name="email" placeholder="Your Email" onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email} required />
            <label htmlFor=""></label>
            <input className="input" type="password" name="psw" placeholder="Your Password" onChange={(e)=>{setUser({...user,psw:e.target.value})}} value={user.psw} required />
            <input type="submit" value="Submit"/>
        </form>
        <a href="#" id="sign-in" onClick={props.set(false)}>Do not have an account? Sign in</a>
    </>
    );    
} 

export default Login;