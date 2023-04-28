import React, { useEffect, useState } from 'react'
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn'
import './static/SpecificJobs.css'
import FullJobDescription from './components/FullJobDescription'
import { useLocation } from 'react-router'

function SpecificJobs() {
  const [job, setJob] = useState([])
  const location = useLocation()
  const specificjob = location.state.job

  console.log(specificjob)
  const fetchjobs = async () => {
      try {
      const response = await fetch(
          "http://127.0.0.1:8000/employer/AllJobs/"
      ).then((response) => response.json());
      setJob(response);
  }catch (err) {
      console.log(err);
    }};
  useEffect( () => {
      fetchjobs()
  }, [])
  return (
    <div>
      <NavbarSignedIn/>
      <div className="specific-jobs-main">
        <div className="specific-left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, architecto et placeat quas eos voluptates porro cupiditate ducimus quos? Corrupti voluptates excepturi similique amet perferendis nesciunt iure pariatur sequi? Consequatur.</p>
        </div>
        <div className="specific-right">
          <FullJobDescription specificjob={specificjob}/>
        </div>
      </div>
    </div>
  )
}

export default SpecificJobs
