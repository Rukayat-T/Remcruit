import React from 'react'
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn'
import './static/SpecificJobs.css'
import FullJobDescription from './components/FullJobDescription'

function SpecificJobs() {
  return (
    <div>
      <NavbarSignedIn/>
      <div className="specific-jobs-main">
        <div className="specific-left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, architecto et placeat quas eos voluptates porro cupiditate ducimus quos? Corrupti voluptates excepturi similique amet perferendis nesciunt iure pariatur sequi? Consequatur.</p>
        </div>
        <div className="specific-right">
          <FullJobDescription/>
        </div>
      </div>
    </div>
  )
}

export default SpecificJobs
