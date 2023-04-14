import React from "react";
import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import './LoginForm.css'
import AuthContext from "../../../context/AuthContext";


function LoginForm() {
  let {loginUser} = useContext(AuthContext)
  const [inputs, setInputs] = useState({});

  return (
    <form onSubmit={loginUser} className="form">
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
        <p>Dont have an account? <Link to='/jobseeker/register'>Sign Up</Link></p>
    </form>
  )
}

export default LoginForm;
