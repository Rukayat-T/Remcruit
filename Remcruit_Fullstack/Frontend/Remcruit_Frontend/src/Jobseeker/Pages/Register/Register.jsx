import React from "react";
import "../../../pages/Login/Login.css";
import Carousel from "../../../pages/components/Carousel/Carousel";
import RegisterForm from "../../../pages/components/RegisterForm/RegisterForm";

function Register() {
  return (
    <div>
      <div className="login-main-container">
        <div className="right-container">
          <div className="right-container-content">
            <h1>Create your account</h1>
            <RegisterForm />
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
