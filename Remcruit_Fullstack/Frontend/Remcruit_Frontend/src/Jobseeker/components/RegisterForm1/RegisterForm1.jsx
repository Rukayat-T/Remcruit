import React from 'react'



  

  
  function RegisterForm1({ formData, setFormData, onSubmit }) {
    const [university_name, setuniversity_name] = React.useState("UNILAG");
    const [SUBJECT_OF_STUDY_CHOICES, setSUBJECT_OF_STUDY_CHOICES] = React.useState("LAW");
    const [YEAR_OF_GRADUATION_CHOICES, setYEAR_OF_GRADUATION_CHOICES] = React.useState("2017");
   const [DEGREE_CLASSIFICATION_CHOICE, setDEGREE_CLASSIFICATION_CHOICE] = React.useState("FIRST");
   
    const handleuniversity_name= (event) => {
   
       setuniversity_name(event.target.value);
   
    };
   
    const handleSUBJECT_OF_STUDY_CHOICES = (event) => {
   
       setSUBJECT_OF_STUDY_CHOICES(event.target.value);
   
    };
   
    const handleYEAR_OF_GRADUATION_CHOICES = (event) => {
   
       setYEAR_OF_GRADUATION_CHOICES(event.target.value);
   
    };
   
   
    const handleDEGREE_CLASSIFICATION_CHOICE = (event) => {
   
       setDEGREE_CLASSIFICATION_CHOICE(event.target.value);
   
    };
    
   return(
    <>
    <form onSubmit={onSubmit}>

    <div>

<Dropdown

  label="University name"

  options={[

    { label:'Babcock University' , value: 'BABCOCK_UNIVERSITY' },

    { label: 'Unilag', value: 'UNILAG' },

    { label: 'Afe Babalola University Ado-Ekiti', value: 'ABUAD' },

    { label:'Bowen' , value: 'BOWEN' },


  ]}

  value={university_name}

  onChange={handleuniversity_name}

/>

<Dropdown

  label="Subject of study"

  options={[

    { label: 'Computer Science', value: 'COMPUTER_SCIENCE' },

    { label: 'Petroleum Engineering', value: 'PETROLEUM_ENGINEERING' },

    { label: 'Pharmacy', value: 'PHARMACY' },

    { label: 'Economics', value: 'ECONOMICS' },

    { label: 'Law', value: 'LAW' },

  ]}

  value={SUBJECT_OF_STUDY_CHOICES}

  onChange={handleSUBJECT_OF_STUDY_CHOICES}

/>

<Dropdown

 label="Year of graduation"

 options={[

   { label: '2017', value: '2017' },

   { label: '2018', value: '2018' },

   { label: '2019', value: '2019' },

   { label: '2020', value: '2020' },

   { label: '2021', value: '2021' },

   ]}

   value={YEAR_OF_GRADUATION_CHOICES}

   onChange={handleYEAR_OF_GRADUATION_CHOICES}

/>


<Dropdown

 label="Degree classification"

 options={[

  { label: 'First Class Honours', value: 'FIRST' },

  { label: 'Second Class Honours(upper)', value: 'SECOND_UPPER' },

  { label: 'Second Class Honours(lower)', value: 'SECOND_LOWER' },

  { label: 'Third Class Honours', value: 'THIRD' },

  ]}

 value={DEGREE_CLASSIFICATION_CHOICE}

 onChange={handleDEGREE_CLASSIFICATION_CHOICE}

/>


<div className="type">
               <div className="Qualificationtype">
               <label>Qualification type</label>
                     <input
                   type="checkbox"
                   name="Undergraduate"
                   value="Undergraduate"
                   onChange={(e) => setFormData({ ...formData, highest_qualification: e.target.value })}
                   checked={formData.highest_qualification === "Undergraduate"}
               /> 
                <input
                   type="checkbox"
                   name="POSTGRADUATE(Research)"
                   value="POSTGRADUATE"
                   onChange={(e) => setFormData({ ...formData, highest_qualification: e.target.value })}
                   checked={formData.highest_qualification === "POSTGRADUATE"}
               /> 
               <input
                   type="checkbox"
                   name="POSTGRADUATE(Tought)"
                   value="POSTGRATUATE"
                   onChange={(e) => setFormData({ ...formData, recruitment_agency: e.target.value })}
                   checked={formData.recruitment_agency === "False"} /> 
           </div>
           
       </div> 

       <div className="continue">
           <button>
               Continue
           </button>

           </div>

</div>
        </form>

        </>
   )
       
  }
  export default RegisterForm1










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




