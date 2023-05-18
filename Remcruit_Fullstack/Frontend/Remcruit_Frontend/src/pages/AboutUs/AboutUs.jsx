import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import NavbarSignedIn from '../../Jobseeker/Components/navbarSignedin/NavbarSignedIn'


function AboutUs() {
  let {user} = useContext(AuthContext)
  return (
    <div>
      {user ?  <NavbarSignedIn /> :  <Navbar/> }
      
      <p>This is all about us</p>
    </div>
  )
}

export default AboutUs
