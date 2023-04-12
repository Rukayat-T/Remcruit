import React from "react";
import { useState, useContext } from "react";
import './forgotpassword.css'
import AuthContext from "../../../context/AuthContext";

function forgotpassword() {
  let {loginUser} = useContext(AuthContext)
  const [inputs, setInputs] = useState({});

  <div className="contianer"> 

  return (
    
    <form onSubmit={loginUser}>
    <input 
      type = 'text'
      name="username" 
      placeholder="Email address"
    />
  
      <input type="submit"/>
  </form>
)</div>
   
}

export default forgotpassword;
