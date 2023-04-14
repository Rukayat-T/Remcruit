import React from 'react'

function RegisterForm() {
  return (
    <div>
      <form action="POST" className='form'>
        <label htmlFor="first_name">First name</label>
        <input type="text" placeholder='First name' id='first_name'/>
        <label htmlFor="last_name">Last name</label>
        <input type="text" placeholder='Last name' id='last_name'/>
        <label htmlFor="email">Email address</label>
        <input type="email" placeholder='Email Address' id='email'/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Password' id='password'/>
        <label htmlFor="password2">Confirm password</label>
        <input type="password2" placeholder='Confirm password' id='password'/>
        <label htmlFor="phone">Phone number</label>
        <input type='tel' placeholder='Phone number' id='phone'/>  
        <label htmlFor="female"><input type='radio' id='female' value='female'/>Female</label>
        <label htmlFor="male"><input type='radio' id='male' value='male'/>Male</label>
       
      </form>
    </div>
  )
}

export default RegisterForm
