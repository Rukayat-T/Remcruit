import React, {useContext} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AuthContext from '../../context/AuthContext'
import Steps from './components/Steps/Steps'
import Community from './components/Community/Community'

function LandingPage() {
  let {user} = useContext(AuthContext)
  return (
    <div>
      <Navbar />
      {user &&  <p>Hello {user.username}</p>}
      <Steps/>
      <Community/>
    </div>
  )
}

export default LandingPage