import React from "react";
import { Link } from 'react-router-dom'
import './Registerpage2.css'
import "../../../pages/Login/Login.css";

import RegisterForm from "../../components/RegisterForm/RegisterForm";

function Registerpage2() {
  return (
    <div> 
        
      <div className="register2-main-container">

      <div className="right-container">
          <div className="register-text">
            <h1>
            Looking to start your career?
            </h1>

            <h3>We’ve got your back</h3>

            <p>Browse through thousands of job listings, companies, organisations and internships. Start creating 
               connections with companies now.</p>
          </div>
          
        </div>




        <div className="left-container">
          <div className="left-container-content">
            

            <div className="register">
            <RegisterForm/>
            </div>


           
            <div className="continue">
            <Link to="/registerpage2">Register and Continue</Link>

            </div>

           
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Registerpage2;
