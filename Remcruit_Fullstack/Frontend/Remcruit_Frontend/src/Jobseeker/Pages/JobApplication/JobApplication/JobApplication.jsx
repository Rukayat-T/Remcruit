import React from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import Vector from '../static/Vector.png'
import './JobApplication.css'

function JobApplication() {
  return (
    <div>
        <Navbar/>
        <div className="jobapplication-main-container">
            <div className="jobapplication-container">
                <div className="jobapplication-content">
                    <h1>Application Form</h1>
                    <div className="progress-bars">
                        <div className="bar one">
                            <p className='title'>STEP ONE</p>
                            <p>Your Personal Information</p>
                        </div>
                        <div className="bar two">
                        <p className='title'>STEP TWO</p>
                            <p>Upload your CV</p>
                        </div>
                        <div className="bar three">
                        <p className='title'>STEP THREE</p>
                            <p>Employer Questions</p>
                        </div>
                    </div>
                </div>

            </div>
            <img src={Vector} alt="" />
        </div>
    </div>
  )
}

export default JobApplication
