import React, { useContext, useEffect, useState } from 'react'
import '../static/SpecificComponents.css'
import GloLogo from '../static/Frame.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faBookmark} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';


function FullJobDescription({specificjob}) {
    console.log(specificjob)
  return (
    <div>
        <div className="job-description-main-container">
            <div className="description-main-content">
                <div className="description-header">
                    <div className="logo">
                        <img src={GloLogo} alt="" />
                    </div>
                    <div className="header-job-title">
                            <h1>{specificjob?.title}</h1>
                            <p>{specificjob?.company?.organisation_name}</p>
                        </div>
                    <div className="share-save">
                    <FontAwesomeIcon icon={faShareNodes}/>
                    <FontAwesomeIcon icon={faBookmark}  />
                    </div>
                </div>
                <div className="horizontal-line">
                </div>
                <div className="scrollable-description">
                <div className="content-cards">
                    <div className="content-card cardone">
                        <p>Job Type</p>
                        <p className='dynamic'>{specificjob?.job_type}</p>
                    </div>
                    <div className="content-card cardtwo">
                        <p>Location</p>
                        <p className='dynamic'>{specificjob?.location}</p>
                    </div>
                    <div className="content-card cardthree">
                        <p>Salary</p>
                        <p className='dynamic'>NGN {specificjob?.salary}</p>
                    </div>
                </div>
                <div className="description-description">
                    <h1>Job Description</h1>
                    <p> {specificjob?.description}
                    </p>
                    <h1>Key Responsibilities</h1>
                    <p>
                    You will work collaboratively in small teams and iteratively through design and development to deliver fully functioning bank services and integrations, channel systems (USSD, web-based and mobile applications ). <br />
                    <br />
                    As a software Lead, you will be a core member of the team with responsibilities that range from driving the architecture design and technology decisions for shaping the next generation 
                    products for various internal teams to ensuring that we stay on the leading edge of technology.
                    </p>
                </div>
                <div className="horizontal-line">
                </div>
                <div className="description-button">
                <Link to={'/jobapplication'} state={{ jobid: specificjob.id }}><button>Apply Now</button></Link>
                </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default FullJobDescription
