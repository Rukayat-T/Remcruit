import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div>
      <nav>
        <img src= {Logo} alt="" srcset="" />
        <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/login' >Login</Link></li>
        <li><Link to='/register' >Register</Link></li>
        <li><Link to='/aboutus' >About Us</Link></li>
        <li><Link to='/recruiter' className='register'>Recruiter?</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar


