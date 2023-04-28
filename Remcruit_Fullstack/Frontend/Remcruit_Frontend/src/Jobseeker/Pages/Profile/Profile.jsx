import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import AuthContext from '../../../context/AuthContext'
import JobSeekerContext from '../../../context/JobSeekerContext'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faImage, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faker } from '@faker-js/faker';
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn'


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

    const navigate = useNavigate()
    const back = () => {
        navigate('/home')
        }
    
    const randomImage = faker.image.city();
    const randomAvatar = faker.image.avatar();

    const genderDefaultValue = jobseeker?.gender
    const uniDefaultValue = jobseeker?.university_name
    const roleDefualtValue = jobseeker?.role_type
    const yearDefaultValue = jobseeker?.year_of_graduation
    const degreeDefualtValue = jobseeker?.degree_classification
    const industryDefaultValue = jobseeker?.industry
    const courseDefaultValue = jobseeker?.subject_of_study
    const qualificationDefaultValue = jobseeker?.highest_qualification

    const defaultValue = "String"

    // console.log(jobseeker)
    // console.log(qualificationDefaultValue)
    // console.log(degreeDefualtValue)

//     const [select, setSelect] = useState();
//     const numbers = ['1', '2', '3'];
  
//     const handleClick = (i) => {
//     setSelect(i);
//   };
//   console.log(select)
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
        <hr />
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
                    <select name="" id="gender" value={genderDefaultValue} >
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
                    <select name="" id="role" value={roleDefualtValue}>
                        {role?.map(choice => (
                            <option key = {choice[0]} value={choice[0]} >
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="industry">Industry Sector</label>
                    <select name="" id="industry" value={industryDefaultValue}>
                        {industry?.map(choice => (
                            <option key = {choice[0]} value={choice[0]} >
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
                    <select name="" id="university" value={uniDefaultValue}>
                        {uni?.map(choice => (
                            <option key = {choice[0]} value={choice[0]}>
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="course">Subject of Study</label>
                    <select name="" id="course" value={courseDefaultValue}>
                        {subject?.map(choice => (
                            <option key = {choice[0]} value={choice[0]}>
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="qualification">Highest Qualification</label>
                    <select name="" id="qualification" value={qualificationDefaultValue}>
                        {qualification?.map(choice => (
                            <option key = {choice[0]} value={choice[0]}>
                                {choice[1]}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="degree">Degree Classification</label>
                    <select name="" id="degree" value={degreeDefualtValue} >
                        {degree?.map(choice => (
                            <option key = {choice[0]} value={choice[0]} >
                                {choice[0]}
                            </option>
                        ))}
                    </select>
                    </div> 
                    <div className="profile-input">
                    <label htmlFor="year">Year of graduation</label>
                    <select name="" id="year" value={yearDefaultValue}>
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
                    <div className="profile-input">
                    <label htmlFor="first_name">Employer</label>
                    <input type="text" id="first_name"/>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="first_name">Role</label>
                    <input type="text" id="first_name"/>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="first_name">Summary</label>
                    <input type="text" id="first_name"/>
                    </div>
                    <div className="profile-input">
                    <label htmlFor="first_name">Duration</label>
                    <input type="text" id="first_name"/>
                    </div>
                    <div className="add-button">
                        <button><FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />Add</button>
                    </div>
                    </div>
                    <div className="uploads">
                    <h3>CV UPLOAD</h3>
                    <div className="profile-input">
                    <label htmlFor="first_name">CV will be here</label>
                    <input type="file" id="first_name"/>
                    </div>
                    <h3>IDENTIFICATION UPLOAD</h3>
                    <div className="profile-input">
                    <label htmlFor="first_name">Identification will be here</label>
                    <input type="file" id="first_name"/>
                    </div>
                    <p>Max file:</p>
                    <p>Allowed file types:</p>
                    </div>
                </div>
            
        </div>
        <div className="profile-button">
        <button type="submit">Save Changes</button>
        <button type="button" className='cancelbtn'>Cancel</button>
        </div>
        {/* <ul>
      {numbers.map((item, index) => (
        <h1
          key={index}
          onClick={() => handleClick(index)}
          className={index === select ? 'selected' : ''}>
          {index}
        </h1>
      ))}
    </ul> */}
        
     </div>
    </div>
    </div>

  )
}

export default Profile
