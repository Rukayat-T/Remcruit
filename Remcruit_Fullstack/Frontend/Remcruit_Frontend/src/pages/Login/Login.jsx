import React from 'react'
import Logo from '../../assets/fullLogo.svg'
import Carousel from '../components/Carousel/Carousel'
import './Login.css'
import AppleLogo from '../assets/apple-logo.svg'
import GoogleLogo from '../assets/google-logo.svg'
import LinkedinLogo from '../assets/linkedin-logo.svg'
import LoginForm from '../components/LoginForm/LoginForm'
import ExternalLogin from '../../components/ExternalLogin/ExternalLogin'

const Login = () => {
  return (
    <div>
      <div className="login-main-container">
        <div className="left-container">
          <div className="left-text">
          <p>“Remcruit helped me land my dream job in the tech industry.........”</p>
            </div>
            <div className="carousel">
            <Carousel/>
            </div>
          
        </div>
        <div className="right-container">
          <div className="right-container-content">
            <h1>Welcome Back! </h1>
            <div className="external">
            <ExternalLogin/>
            </div>
            
            <div className="horizontal-section">
              <p className="hr-lines">or</p>
            </div>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
