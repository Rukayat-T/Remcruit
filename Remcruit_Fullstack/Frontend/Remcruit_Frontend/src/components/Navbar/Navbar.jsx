import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/fullLogo.svg'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <img src={Logo} alt="" srcSet="" />
        <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/home' >Home signed in</Link></li>
          <li><Link to='/login' >Login</Link></li>
          <li><Link to='/jobseeker/register' >Register</Link></li>
          <li><Link to='/employer' className='register'>Recruiter?</Link></li>

          {/* <li><Link to='/employer/register' className='register'>Recruiter?</Link></li> */}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar


