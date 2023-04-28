import React, { useContext, useEffect, useState } from 'react'
import CompanyBox from '../../Components/companyBox/companyBox'
import AuthContext from '../../../context/AuthContext'
import JobSeekerContext from '../../../context/JobSeekerContext'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faImage, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom'




function Myjobspage() {
    let {user} = useContext(AuthContext)
    let {jobseeker, jobSeeker} = useContext(JobSeekerContext)
    const [choices, setChoices] = useState([])
    useEffect(() => { 
        jobSeeker()
        jobseeker
        choices
        setChoices
      }, [])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/jobseekers/choices/`)
        .then(response => response.json())
        .then(data => setChoices(data))
        .catch(error => console.log(error));
    }, [])
    

    const navigate = useNavigate()
    const back = () => {
        navigate('/home')
        }
    
   
    const randomAvatar = faker.image.avatar();

  



    console.log(jobseeker)
   
  return (
    <div>
         {/* <NavbarSignedIn/> */}
     <div className="profile-main-container">
        <div className="profile-header">
        <FontAwesomeIcon icon={faArrowLeft} style={{color: "#000000",}} onClick={back} />
        <img src={randomAvatar} alt="" />
            <h1>Hi, {user.first_name}</h1>
        </div>
        <div className="hori">
        
        </div>
        </div>

        <div className="spotlightSectionContainer">
                    <p>New Jobs</p>
                    <div className="companies">
                        <CompanyBox />
                        <CompanyBox />
                        <CompanyBox />
                    </div>
                </div>

                <div className="statustabss">
                <ul className='tabsss'>
                    <li>Saved</li>
                    <li>Applied</li>
                    <li>Interviews</li>
                    <li>Archived</li>
                   
                </ul>
                </div>
        </div>
       
                  

  )
}

export default Myjobspage
