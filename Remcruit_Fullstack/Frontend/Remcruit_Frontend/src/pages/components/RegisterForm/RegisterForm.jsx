
import React, {useState} from 'react';
import './RegisterForm.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>

              <div className="gender">
              <label htmlFor="female"><input type='radio' id='female' value='female'/>Female</label>
              <label htmlFor="male"><input type='radio' id='male' value='male'/>Male</label>
             </div>

             <div className='phone-number'>

             <label htmlFor="phone">Phone number</label>
             <input type='tel' placeholder='Phone number' id='phone'/>  
             </div>

          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;




// import React from 'react'

// function RegisterForm() {
//   return (
//     <div>
//       <form action="POST">
//         <label htmlFor="first_name">First name</label>
//         <input type="text" placeholder='First name' id='first_name'/>
//         <label htmlFor="last_name">Last name</label>
//         <input type="text" placeholder='Last name' id='last_name'/>
//         <label htmlFor="email">Email address</label>
//         <input type="email" placeholder='Email Address' id='email'/>
//         <label htmlFor="password">Password</label>
//         <input type="password" placeholder='Password' id='password'/>
//         <label htmlFor="password2">Confirm password</label>
//         <input type="password2" placeholder='Confirm password' id='password'/>
//         <label htmlFor="phone">Phone number</label>
//         <input type='tel' placeholder='Phone number' id='phone'/>  
//         <label htmlFor="female"><input type='radio' id='female' value='female'/>Female</label>
//         <label htmlFor="male"><input type='radio' id='male' value='male'/>Male</label>
       
//       </form>
//     </div>
//   )
// }

// export default RegisterForm
