import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'
import AuthContext from '../../context/AuthContext'
import Steps from './components/Steps/Steps'
import Community from './components/Community/Community'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

function LandingPage() {

  let { user } = useContext(AuthContext)
  return (
    <div>
      <Navbar />
      {/* {user && <p>Hello {user.username}</p>} */}
      <Steps />
      <Community />
      <Footer />
      

    </div>
  )
}

export default LandingPage