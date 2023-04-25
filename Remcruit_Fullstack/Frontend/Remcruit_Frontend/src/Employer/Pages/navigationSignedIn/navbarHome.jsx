import React from 'react'
import "./navbarSignedIn.css"
import Logo from "../../../assets/fullLogo-cropped.svg"
import { Link } from 'react-router-dom';

function NavbarSignedIn() {
    return (
        <>
            <div>
                <nav className='employerNav'>
                    <img src={Logo} alt="" srcset="" className='empLogo' />
                    <p>for employers</p>
                    <ul className='Menu'>
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='#' >Notifications</Link></li>
                        <li><Link to='/employer/job/post' >Post a Job</Link></li>
                        <li><Link to='/dashboard' >Dashboard</Link></li>
                        <li><div className='vertLine' /></li>
                        <li>
                            <div className='comp'>
                                <p>company name</p>
                                <p className='owner'>owner: owner12345678@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavbarSignedIn