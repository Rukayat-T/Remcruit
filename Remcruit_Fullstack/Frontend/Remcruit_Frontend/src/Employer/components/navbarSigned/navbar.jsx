import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../../../assets/fullLogo.svg'
import Logo from '../../../assets/fullLogo-cropped.svg'
import './navbarStyles.css'
import AuthContext from '../../../context/AuthContext'

// import './Navbar.css'
// import Logo from '../../assets/fullLogo.svg'

const EmployerNavbar = () => {
    let {logoutUser} = useContext(AuthContext)
    return (
        <div>
            <nav className='employerNav'>
                <img src={Logo} alt="" srcset="" className='empLogo' />
                <p>for employers</p>
                <ul className='navMenu'>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/login' >Login</Link></li>
                    <li><Link to='/employer/register' >Register</Link></li>
                    <li><Link to='#' >Pricing</Link></li>
                    <li onClick={logoutUser}>Logout</li>
                    {/* <button className='postBtn'>Post A Job</button> */}

                    <li><Link to='/employer/register' className='POJ'>Post A Job </Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default EmployerNavbar


