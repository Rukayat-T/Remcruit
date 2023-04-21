import React from 'react'

import { useLocation, useNavigate } from 'react-router'

import wave from '../../../assets/wave.png'
import "./jobPostSummaryStyles.css"


{
    /* <input
                type="radio"
                checked={formData.gender === "Female" ? true : false}
                disabled={formData.gender === "Male" ? true : false}
            /> Female
            <input
                type="radio"
                checked={formData.gender === "Male" ? true : false}
                disabled={formData.gender === "Female" ? true : false}
            /> Male */
}

function JobPostSummary() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1);
    }
    const location = useLocation()
    console.log(location.state.postdata)

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
                                            value={location.state.postdata.position_title}
                                            disabled />

                                    </div>
                                    <div className="vacancies">
                                        <label> Vacancies</label>
                                        <input type="text"
                                            disabled />

                                    </div>
                                    <div className="location">
                                        <label>Location</label>
                                        <input type="text"
                                            disabled />

                                    </div>
                                </div>

                                <div className="row2">
                                    <div className="jobType">
                                        <label> Job Type*</label>
                                        <input type="text"
                                            disabled />

                                    </div>
                                    <div className="qualificationRequirement">
                                        <label> Qualification Requirement</label>
                                        <input type="text"
                                            disabled />

                                    </div>
                                    <div className="salaryy">
                                        <label>Salary/Month</label>
                                        <input type="text"
                                            disabled />
                                    </div>
                                </div>
                            </div>

                            <div className="row3">
                                <div className="jobDescription">
                                    <label> Job Description*</label>
                                    <textarea name="" id="" cols="30" rows="10" disabled></textarea>
                                </div>
                            </div>

                            <div className="row3">
                                <div className="jobDescription">
                                    <label> Key Responsibilitiess*</label>
                                    <textarea name="" id="" cols="30" rows="10" disabled></textarea>
                                </div>
                            </div>

                            <div className="row4">
                                <div className='remoteO'>
                                    <p>Is this a remote opportunity?</p>

                                    <div className='remote'>

                                        <div className='opt'>
                                            <input
                                                type="radio"
                                                name="female"
                                            /> Yes
                                        </div>
                                        <div className='opt'>
                                            <input
                                                type="radio"
                                                name="male"
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
                                                name="female"
                                            /> Yes
                                        </div>
                                        <div className='opt'>
                                            <input
                                                type="radio"
                                                name="male"
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
                                                name="female"
                                            /> Yes
                                        </div>
                                        <div className='opt'>
                                            <input
                                                type="radio"
                                                name="male"
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
                                    />
                                </div>
                                <div className='ApplicationDeadline'>
                                    <label htmlFor="">Application Deadline</label>
                                    <input
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="row6">
                                <div className='postDuration'>
                                    <label htmlFor="">Job Post Duration</label>
                                    <input
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="navFooter">
                                <div className="back" >
                                    <button onClick={goBack}>Back</button>
                                </div>
                                <div className="postBtn" >
                                    <button>Post</button>
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