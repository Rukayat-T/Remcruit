import React, {useContext} from 'react'
import './LandingPage.css'
import Navbar from '../../components/Navbar/Navbar'
import AuthContext from '../../context/AuthContext'

function LandingPage() {
  let {user} = useContext(AuthContext)
  return (
    <div>
      <Navbar />
      {user &&  <p>Hello {user.username}</p>}
    </div>
  )
}

export default LandingPage