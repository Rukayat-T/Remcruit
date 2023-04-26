import React from "react";
import { Link } from 'react-router-dom'
import './Register.css'
import "../../../pages/Login/Login.css";
import Carousel from "../../../pages/components/Carousel/Carousel";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import ExternalLogin from '../../../components/ExternalLogin/ExternalLogin'

function Register() {
  return (
    <div> 
      <div className="register-main-container">
        <div className="right-container">
          <div className="right-container-content">
            <h1>Create your account</h1>

            <div className="external">
            <ExternalLogin/>
            </div>


            <div className="horizontal-section">
              <p className="hr-lines">or</p>
            </div>


            {/* <a href="/jobseeker/registerpage2" class="button">Continue with emai</a> */}
             {/* <button className="button"><Link to="/jobseeker/registerpage2">Continue with email</Link></button>  */}
             {/* <button  className="button" as = {Link} to ="/jobseeker/registerpage2">Continue with email</button> */}
             <Link to="/jobseeker/registerpage2"><button className="button">Continue with email</button></Link>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            
        
       

          </div>
        </div>
        <div className="left-container">
          <div className="left-text">
            <p>
            “I found finding a job at Remcruit one of the easiest processes ive ever had to deal with”
            </p>
          </div>
          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
