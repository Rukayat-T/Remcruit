import React from 'react'


import './RegisterForm.css'
  
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import PhoneNumberInput from './PhoneNumberInput'



  function RegisterForm({ formData, setFormData }) {
    
    const checkboxHandler = (e) => {
        setFormData({ ...formData, terms_and_conditions: "True" })
    }
    
    
  
      return (
          <>
          
        
              <div className="names">
              <h3>Account details</h3>
                  <div className="first-Name">
                  <label>First Name*</label>
                      <input
                          type="text"
                          name="firstname"
                          value={formData.first_name}
                          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                          placeholder='Firstname' />
                  </div>
                  <div className="last-Name">
                  <label>Last Name*</label>
                      <input
                          type="text"
                          name="lastname"
                          value={formData.last_name}
                          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                          placeholder='Lastname' />
                  </div>
              </div>
              
                  <div className='gends'>
                  <label>Gender*</label>
                      <div className='genders'>
                          <div className='fem'>
                              <input
                             
                                  type="radio"
                                  name="female"
                                  value="Female"
                                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                  checked={formData.gender === "Female"}
                                  
                              /> Female
                          </div>
                          <div className='mal'>
                              <input
                                  type="radio"
                                  name="male"
                                  value="Male"
                                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                  checked={formData.gender === "Male"}
                              /> Male
                          </div>
                      </div>
                  </div>
                
  
             
              <div className="contacts">
  
                  <div className="email">
                  <label>Email Address*</label>
                      <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder='Email' />
                  </div>
                  
                  <div className="phoneNo">
                  
                  <label>Phone number*</label>
                      <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phone_number}
                          onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                          placeholder='Phone Number' />
                  </div>
              </div>
              <div className="pass-word">
                  <div className="passwords">
                  <label>Password*</label>
                      <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                          placeholder='Password'/>
                  </div>
                  <div className="conf-Password">
                  <label>Confirm Password*</label>
                      <input
                          type="password"
                          name="password2"
                          value={formData.password2}
                          onChange={(e) => setFormData({ ...formData, password2: e.target.value })}
                          placeholder=' Confirm Password' />
                  </div>
              </div>
              {/* <PhoneNumberInput /> */}

              <div className="terms-And-Conditions">
               
                <input
                    type="checkbox"
                    name="terms"
                    value="False"
                    onChange={checkboxHandler}
                // 
                />
                 I have read and agree to the terms and conditions and consent to
                  receive emails about jobs and career related topics. I understand 
                  that I can unsubscribe from emails at any time.
            </div>

           
          
            
          </>
      )
  }
  export default RegisterForm










//     <div className='form-input'>
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
//         ``
//         <div class="tacbox">
//         <input id="checkbox" type="checkbox" />
//      <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
//       </div>
       
//       </form>
//     </div>
//   )
// }

// export default RegisterForm








// import { useState } from 'react';

// export default function RegisterForm() {

// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
// 	setName(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (name === '' || email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

// // Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {name} successfully registered!!</h1>
// 	</div>
// 	);
// };

// // Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return (
// 	<div className="form">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form>
// 		{/* Labels and inputs for form data */}
// 		<label className="label">First Name</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

// 		<label className="label">Email</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label className="label">Password</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="password" />

// 		<button onClick={handleSubmit} className="btn" type="submit">
// 		Submit
// 		</button>
// 	</form>
// 	</div>
// );
// }











// import React, {useState} from 'react';
// import './RegisterForm.css'


// function RegisterForm() {
//     return(
//       <div className="form">
//           <div className="form-body">
//               <div className="username">
//                   <label className="form__label" for="firstName">First Name </label>
//                   <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
//               </div>
//               <div className="lastname">
//                   <label className="form__label" for="lastName">Last Name </label>
//                   <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
//               </div>
//               <div className="email">
//                   <label className="form__label" for="email">Email </label>
//                   <input  type="email" id="email" className="form__input" placeholder="Email"/>
//               </div>
//               <div className="password">
//                   <label className="form__label" for="password">Password </label>
//                   <input className="form__input" type="password"  id="password" placeholder="Password"/>
//               </div>
//               <div className="confirm-password">
//                   <label className="form__label" for="confirmPassword">Confirm Password </label>
//                   <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
//               </div>

//               <div className="gender">
//               <label htmlFor="female"><input type='radio' id='female' value='female'/>Female</label>
//               <label htmlFor="male"><input type='radio' id='male' value='male'/>Male</label>
//              </div>

//              <div className='phone-number'>

//              <label htmlFor="phone">Phone number</label>
//              <input type='tel' placeholder='Phone number' id='phone'/>  
//              </div>

//           </div>

//           <div class="tacbox">
//            <input id="checkbox" type="checkbox" />
//           <label for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
//           </div>
//           <div class="register">
//               <button type="submit" class="btn">Register</button>
//           </div>
//       </div>      
//     )       
// }
// export default RegisterForm;




