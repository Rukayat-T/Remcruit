import React from "react";
import "../../../pages/Login/Login.css";
import Carousel from "../../../pages/components/Carousel/Carousel";
import RegisterForm from "../../../pages/components/RegisterForm/RegisterForm";
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


            <p className="continuewithemail"><Link to="/RegisterPage2">Continue with email</Link></p>
        <input type="submit"/>
        <p className="login"><Link to="/login">Already have an account? Login</Link></p>

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
