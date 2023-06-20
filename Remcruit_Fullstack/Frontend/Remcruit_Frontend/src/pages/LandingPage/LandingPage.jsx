import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'
import AuthContext from '../../context/AuthContext'
import Steps from './components/Steps/Steps'
import Community from './components/Community/Community'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import MostPopular from './components/MostPopular/MostPopular'
import WhatWeOffer from './components/WhatWeOffer'
import Banner from './components/Banner'

function LandingPage() {

  let { user } = useContext(AuthContext)
  
  return (
    <div>
     <Banner/>
      <Steps />
      <Community />
      <MostPopular/>
      <WhatWeOffer/>
      <Footer />
      

    </div>
  )
}

export default LandingPage