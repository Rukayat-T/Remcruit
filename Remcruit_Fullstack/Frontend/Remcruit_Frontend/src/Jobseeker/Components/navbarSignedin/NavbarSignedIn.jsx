import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/fullLogo-cropped.svg'

import './navbarSignedIn.css'
import AuthContext from '../../../context/AuthContext'

function NavbarSignedIn() {
    let {logoutUser} = useContext(AuthContext)
    return (
        <div className='n'>
            <nav className='employerNav'>
                <Link to="/home"><img src={Logo} alt="" srcSet="" className='empLogo' /></Link>
                <ul className='navMenu'>
                    <li><Link to='/home' >Home</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/Myjobspage'> My Jobs</Link></li>
                    <li><Link to='/aboutus '>About Us</Link></li>
                    <li><Link to='/notif '>Notification</Link></li>
                    <li><Link to='/testing'>Test</Link></li>
                    <li onClick={logoutUser}>Logout</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavbarSignedIn