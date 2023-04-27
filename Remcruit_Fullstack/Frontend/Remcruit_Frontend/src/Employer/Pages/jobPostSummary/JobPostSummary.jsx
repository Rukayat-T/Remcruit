import React, { useContext, useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router'

import wave from '../../../assets/wave.png'
import "./jobPostSummaryStyles.css"
import CompanyContext from '../../../context/CompanyContext'


function JobPostSummary() {

    let { company, thecompany } = useContext(CompanyContext)

    useEffect(() => {
        thecompany()
    }, [])

    const navigate = useNavigate()

    const goBack = (e) => {
        e.preventDefault()
        navigate(-1);
    }

    const location = useLocation()
    console.log(location)
    console.log(location.state.postdata)

    const clearStorage = () => {
        localStorage.removeItem('title')
        localStorage.removeItem('vacancy')
        localStorage.removeItem('location')
        localStorage.removeItem('job_type')
        localStorage.removeItem('salary')
        localStorage.removeItem('pay_rate')
        localStorage.removeItem('description')
        localStorage.removeItem('skills_required')
        localStorage.removeItem('degree_classification')
        localStorage.removeItem('is_remote_opportunity')
        localStorage.removeItem('is_cv_required')
        localStorage.removeItem('is_experience_required')
        localStorage.removeItem('resumption')
        localStorage.removeItem('application_deadline')
        localStorage.removeItem('urgency')
        localStorage.removeItem('is_available')
        localStorage.removeItem('company')
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log()
        let response = await fetch(`http://127.0.0.1:8000/employer/createJob/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(location.state.postdata),
            body: JSON.stringify(location.state.postdata),
        });
        let resJson = await response.json();
        if (response.status === 201) {
            console.log(resJson)
            // localStorage.removeItem('postData')
            clearStorage()
            navigate('/employer')
        } else {
            // localStorage.removeItem('postData')
            console.log(resJson)
            alert("something went wrong")
        }
    };

    return (
        <>
            <div className="Rcontainer">
                <div>
                    <img src={wave} alt="wave" className='wave' />
                </div>

                <div className="summaryContainer">
                    <div className="wBox">
                        <div className="cont">
                            <p className='sum'>Summary</p>

                            <div className="formAnswers">
                                <div className="row1">
                                    <div className="positionTitle">
                                        <label> Position Title*</label>
                                        <input
                                            type="text"
                                            value={location.state.postdata.title}
                                            disabled />

                                    </div>
                                    <div className="vacancies">
                                        <label> Vacancies</label>
                                        <input type="text"
                                            value={location.state.postdata.vacancy}
                                            disabled />

                                    </div>
                                    <div className="location">
                                        <label>Location</label>
                                        <input type="text"
                                            value={location.state.postdata.location}
                                            disabled />

                                    </div>
                                </div>

                                <div className="row2">
                                    <div className="jobType">
                                        <label> Job Type*</label>
                                        <input type="text"
                                            value={location.state.postdata.job_type}
                                            disabled />

                                    </div>
                                    <div className="qualificationRequirement">
                                        <label> Qualification Requirement</label>
                                        <input type="text"
                                            value={location.state.postdata.degree_classification}
                                            disabled />

                                    </div>
                                    <div className="salaryy">
                                        <label>Salary/Month</label>
                                        <input type="text"
                                            value={location.state.postdata.salary}
                                            disabled />
                                    </div>
                                </div>


                                <div className="row3">
                                    <div className="jobDescription">
                                        <label> Job Description*</label>
                                        <textarea name="" id="" cols="30" rows="10" disabled value={location.state.postdata.description}></textarea>
                                    </div>
                                </div>

                                <div className="row3">
                                    <div className="jobDescription">
                                        <label> Key Responsibilitiess*</label>
                                        <textarea name="" id="" cols="30" rows="10" disabled value={location.state.postdata.skills_required}></textarea>
                                    </div>
                                </div>

                                <div className="row4">
                                    <div className='remoteO'>
                                        <p>Is this a remote opportunity?</p>

                                        <div className='remote'>

                                            <div className='opt'>
                                                <input
                                                    type="radio"
                                                    name="remoteYes"
                                                    readOnly
                                                    value={location.state.postdata.is_remote_oppurtunity}
                                                    checked={location.state.postdata.is_remote_oppurtunity === "True" ? true : false}
                                                    disabled={location.state.postdata.is_remote_oppurtunity === "False" ? true : false}
                                                /> Yes
                                            </div>
                                            <div className='opt'>
                                                <input
                                                    type="radio"
                                                    name="remoteNo"
                                                    readOnly
                                                    value={location.state.postdata.is_remote_oppurtunity}
                                                    checked={location.state.postdata.is_remote_oppurtunity === "False" ? true : false}
                                                    disabled={location.state.postdata.is_remote_oppurtunity === "True" ? true : false}
                                                /> No
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row4">
                                    <div className='remoteO'>
                                        <p>Is a CV required?</p>

                                        <div className='remote'>

                                            <div className='opt'>
                                                <input
                                                    type="radio"
                                                    name="ye"
                                                    readOnly
                                                    value={location.state.postdata.is_cv_required}
                                                    checked={location.state.postdata.is_cv_required === "True" ? true : false}
                                                    disabled={location.state.postdata.is_cv_required === "False" ? true : false}
                                                /> Yes
                                            </div>
                                            <div className='opt'>
                                                <input
                                                    type="radio"
                                                    name="n"
                                                    readOnly
                                                    value={location.state.postdata.is_cv_required}
                                                    checked={location.state.postdata.is_cv_required === "False" ? true : false}
                                                    disabled={location.state.postdata.is_cv_required === "True" ? true : false}
                                                /> No
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row4">
                                    <div className='remoteO'>
                                        <p>Is experience required?</p>

                                        <div className='remote'>

                                            <div className='opt'>
                                                <input
                                                    type="radio"
                                                    name="yes"
                                                    readOnly
                                                    value={location.state.postdata.is_experience_required}
                                                    checked={location.state.postdata.is_experience_required === "True" ? true : false}
                                                    disabled={location.state.postdata.is_experience_required === "False" ? true : false}
                                                /> Yes
                                            </div>
                                            <div className='opt'>
                                                <input
                                                    type="radio"
                                                    name="no"
                                                    readOnly
                                                    value={location.state.postdata.is_experience_required}
                                                    checked={location.state.postdata.is_experience_required === "False" ? true : false}
                                                    disabled={location.state.postdata.is_experience_required === "True" ? true : false}

                                                /> No
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row5">
                                    <div className='jobStartDate'>
                                        <label htmlFor="">Job Start Date*</label>
                                        <input
                                            type="text"
                                            value={location.state.postdata.resumption}
                                            disabled
                                        />
                                    </div>
                                    <div className='ApplicationDeadline'>
                                        <label htmlFor="">Application Deadline</label>
                                        <input
                                            type="text"
                                            value={location.state.postdata.application_deadline}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="row6">
                                    <div className='postDuration'>
                                        <label htmlFor="">Job Post Duration</label>
                                        <input
                                            type="text"
                                            value={location.state.postdata.job_post_duration}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="navFooter">
                                <div className="back" >
                                    <button onClick={goBack}>Back</button>
                                </div>
                                <div className="postBtn" >
                                    <button onClick={handleSubmit}>Post</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default JobPostSummary