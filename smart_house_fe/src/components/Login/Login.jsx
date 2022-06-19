import "./Login.css";
import { useState } from "react";
import Axios from "axios";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", psw: "" });
  const [error, setError] = useState("");

  const handleError = (res) => {
    console.log("success");
    if (res) {
      if (res.data === "error") {
        setError("Wrong username or password");
      } else {
        props.setCurrent(res.data);
        props.setLog(true);
        props.setJust(false);
      }
    }
  };

  const handleSubmit = () => {
    Axios.post(`http://${props.ip}:3001/log`, user).then((res) => {
      handleError(res);
    });
  };

  return (
    <>
      <h1>Welcome, please Log in</h1>
      <div className="mess">
        <p id="just">{props.just ? "Successfully registered user" : ""}</p>
        <p className="error">{error}</p>
      </div>
      <div className="form">
        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          value={user.email}
          required
        />
        <label htmlFor="">Password</label>
        <input
          className="input"
          type="password"
          name="psw"
          placeholder="Your Password"
          onChange={(e) => {
            setUser({ ...user, psw: e.target.value });
          }}
          value={user.psw}
          required
        />
        <input
          onClick={() => {
            handleSubmit();
          }}
          type="submit"
          value="Submit"
        />
      </div>
      <a href="#" id="sign-in" onClick={() => props.set(false)}>
        Don't you have an account? Sign in
      </a>
    </>
  );
};

export default Login;
