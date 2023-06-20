import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/fullLogo.svg'

const Navbar = () => {
  return (
    <div className='navbarnot'>
      <nav className='nav'>
       <Link to='/'><img src={Logo} alt="" srcSet="" /></Link> 
        <ul className='just'>
          <li className='selectedli'><Link to='/' >Home</Link></li>
          <li><Link to='/aboutus' >About Us</Link></li>
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


