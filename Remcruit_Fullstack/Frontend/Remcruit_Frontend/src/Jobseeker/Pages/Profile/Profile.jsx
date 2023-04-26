import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import AuthContext from '../../../context/AuthContext'
import JobSeekerContext from '../../../context/JobSeekerContext'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faImage } from '@fortawesome/free-solid-svg-icons'
import { faker } from '@faker-js/faker';


function Profile() {
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
      let uni = choices?.university_choices
      let year = choices?.year_choices
      let degree = choices?.degree_choices
      let gender = choices?.gender_choices
      let role = choices?.role_choices
      let industry = choices?.industry_choices
      let subject = choices?.subject_choices
      let qualification = choices?.qualification_choices

      console.log(jobseeker)

    const navigate = useNavigate()
    const defaultValue = jobseeker?.gender

    const [state, setState] = useState(defaultValue)

    const handleSelectChange = (event) => {
        setState(event.target.value);
      };
    
    const back = () => {
        navigate('/home')
        }
    
    const randomImage = faker.image.city();
    const randomAvatar = faker.image.avatar();


  return (
    <div>
     <div className="profile-main-container">
        <div className="profile-header">
        <FontAwesomeIcon icon={faArrowLeft} style={{color: "#000000",}} onClick={back} />
        <img src={randomAvatar} alt="" />
            <h1>Hi, {user.first_name}</h1>
        </div>
        <div className="profile-main-content">
            <div className="profile-content">
                <div className="profile columnone">
                    <div className="profile-image">
                        <h3>PROFILE IMAGE</h3>
                        {/* <img src="https://picsum.photos/300" alt="" /> */}
                        <img className='image-profile' src={randomImage} alt="" />
                        <div className="change-image">
                        <FontAwesomeIcon icon={faImage} style={{color: "#CA61C3",}} />
                        <p>Change Profile Image</p>
                        </div>
                    </div>
                    <div className="personal-details">
                    <h3>PERSONAL DETAILS</h3>
                    <div className="profile-input">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" value={user.first_name} id="first_name"/>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" value={user.last_name} id="last_name"/>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="gender">Gender</label>
                    <select name="" id="gender" value={defaultValue} onChange={handleSelectChange}>
                        {gender?.map(choice => (
                            <option key = {choice[0]} value={choice[1]}>
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="email">Email Address</label>
                    <input type="text" value={user.username} id="email"/>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" value={jobseeker?.phone_number} id="email"/>
                    </div>
                </div>
                </div>
                <div className="profile columntwo">
                    <div className="professional-summary">
                    <h3>PROFESSIONAL SUMMARY</h3>
                    <p>{jobseeker?.professional_summary}</p>
                    </div>
                    <div className="career-pref">
                    <h3>CAREER PREFERENCES</h3>
                    <div className="profile-input">
                    <label htmlFor="role">Role Type</label>
                    <select name="" id="role" defaultValue={jobseeker?.degree_classification}>
                        {role?.map(choice => (
                            <option key = {choice[0]} value={choice[1]} >
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="industry">Industry Sector</label>
                    <select name="" id="industry" defaultValue={jobseeker?.degree_classification}>
                        {industry?.map(choice => (
                            <option key = {choice[0]} value={choice[1]} >
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    </div>
                    <div className="study-deets">
                    <h3>STUDY DETAILS</h3>
                    <div className="profile-input">
                    <label htmlFor="university">University</label>
                    <select name="" id="university" defaultValue={jobseeker?.university_name}>
                        {uni?.map(choice => (
                            <option key = {choice[0]} value={choice[1]}>
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="course">Course of Study</label>
                    <select name="" id="course" defaultValue={jobseeker?.subject}>
                        {subject?.map(choice => (
                            <option key = {choice[0]} value={choice[1]}>
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="qualification">Qualification Type</label>
                    <select name="" id="qualification" defaultValue={jobseeker?.subject}>
                        {qualification?.map(choice => (
                            <option key = {choice[0]} value={choice[1]}>
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="degree">Degree of Classification</label>
                    <select name="" id="degree" defaultValue={jobseeker?.degree_classification}>
                        {degree?.map(choice => (
                            <option key = {choice[0]} value={choice[1]} >
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div> 
                    <div className="profile-input">
                    <label htmlFor="year">Year of graduation</label>
                    <select name="" id="year">
                        {year?.map(choice => (
                            <option key = {choice[0]} value={choice[1]} >
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    
                   
                    </div>
                </div>
                <div className="profile columnthree">
                    <div className="experiences">
                    <h3>EXPERIENCE</h3>
                    </div>
                    <div className="uploads">
                    <h1>This is uploads</h1>
                    </div>
                </div>
            
        </div>
        <div className="profile-button">
        <button type="submit">Save Changes</button>
        </div>
        
     </div>
    </div>
    </div>

  )
}

export default Profile
