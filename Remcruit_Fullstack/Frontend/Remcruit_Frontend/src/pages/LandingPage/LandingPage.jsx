import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import Navbar from '../../components/Navbar/Navbar'
import AuthContext from '../../context/AuthContext'
import Steps from './components/Steps/Steps'
import Community from './components/Community/Community'
import Footer from '../../components/Footer/Footer'

function LandingPage() {

  const location = useLocation()
  const id = location.state.jobid
  console.log(id)

  "http://0.0.0.0:8000/jobseekers/job/1/application"

  let { user } = useContext(AuthContext)
  return (
    <div>
      <Navbar />
      {user && <p>Hello {user.username}</p>}
      <p>{value}</p>
      <Steps />
      <Community />
      <Footer />
    </div>
  )
}

export default LandingPage