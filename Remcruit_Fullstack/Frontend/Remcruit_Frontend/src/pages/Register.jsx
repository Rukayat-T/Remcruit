import React from "react";

import Carousel from "./components/Carousel/Carousel";
import ExternalRegister from "../components/ExternalRegister/ExternaRegister";

function Register() {
  return (
    <div> 
      <div className="register-main-container">
        <div className="right-container">
          <div className="right-container-content">
            <h1>Create your account</h1>

            <div className="external">
            <ExternalRegister/>
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
              “Remcruit helped me land my dream job in the tech
              industry.........”
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
