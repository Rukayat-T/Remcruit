import React from "react";
import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import './LoginForm.css'
import AuthContext from "../../../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";



function LoginForm() {
  let {loginUser} = useContext(AuthContext)
  const [inputs, setInputs] = useState({});
  let [passwordType, setPasswordType] = useState("password");
 
  const ToggleButton = () => {
    return (passwordType === "password" ?  (<button className="showbutton togglebtn" onClick= { () => {setPasswordType("text")}} type="button" ><FontAwesomeIcon icon={faEye} /></button>) : <button className="hidebutton togglebtn" onClick={ () => {setPasswordType("password")}} type="button"><FontAwesomeIcon icon={faEyeSlash} /></button>)
    }
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
          type={passwordType}
          name="password" 
          // value={inputs.password || ""} 
          // onChange={handleChange}
          placeholder="Password"
        />
        {ToggleButton() }
        <p className="forgot"><Link to="/Forgotpassword">Forgot password?</Link></p>
        <input type="submit"/>
        <p>Dont have an account? <Link to='/jobseeker/register'>Sign Up</Link></p>
    </form>
  )
}

export default LoginForm;
