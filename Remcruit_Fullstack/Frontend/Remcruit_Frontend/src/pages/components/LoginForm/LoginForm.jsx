import React from "react";
import { useState, useContext } from "react";
import './LoginForm.css'
import AuthContext from "../../../context/AuthContext";


function LoginForm() {
  let {loginUser} = useContext(AuthContext)
  const [inputs, setInputs] = useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputs);
  // }

  return (
    <form onSubmit={loginUser}>
      <input 
        type = 'text'
        name="username" 
        // value={inputs.email || ""} 
        // onChange={handleChange}
        placeholder="Email address"
      />
        <input 
          type='password'
          name="password" 
          // value={inputs.password || ""} 
          // onChange={handleChange}
          placeholder="Password"
        />
        <p className="forgot"><Link to="/forgotpassword">Forgot password?</Link></p>
        <input type="submit"/>
        <p className="signup"><Link to="/register">Don't have an account Signup </Link></p>
    </form>
  )
}

export default LoginForm;
