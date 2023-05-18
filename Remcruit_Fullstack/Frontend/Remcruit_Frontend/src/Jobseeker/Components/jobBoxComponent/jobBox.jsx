import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons'
import './jobBox.css'
import JobSeekerContext from '../../../context/JobSeekerContext'

function JobBox({ job }) {
    let { jobSeeker } = useContext(JobSeekerContext)
    const [bookmark, setBookmark] = useState("false")
    const navigate = useNavigate()

    const toggleBookmark = () => {
        if (bookmark === "false") {
            setBookmark("true")
            return;
        }
        setBookmark("false")
    }
    const [jobId, setJobId] = useState(job.id)
    const [showMore, setShowMore] = useState(false);

    const description = job?.description

    return (
        <div className='boxContainer'>
            <div className="boxHeaderSection">
                <div className="companyinformation">
                    <div className="companyLogo">Logo</div>
                    <div className="company">
                        <div className="jobTitle">{job?.title}</div>
                        <div className="companyName">{job?.company?.organisation_name}</div>
                    </div>
                </div>
                <div className="left">
                    <button onClick={toggleBookmark} className='bookmarkBtn'>
                        {bookmark === "false" ? <FontAwesomeIcon icon={regularBookmark} className='bookmark' /> : <FontAwesomeIcon icon={filledBookmark} className='bookmark' />}
                    </button>
                    <Link to={'/specificjobs'} state={{ job: job }}> <button onClick={() => { console.log("hello") }} className="detailsBtn">View Details</button></Link>
                </div>
            </div>
            <div className="jobPropertiesSection">
                <div className="jobTypeContainer">
                    <div className='JobType'>
                        <p className='theTitle'> Job Type </p>
                        <p className='theType'>{job?.job_type}</p>
                    </div>
                </div>
                <div className="experience">
                    <p className='theTitle'>Vacancies</p>
                    <p className='theType'>{job?.open_spots}</p>
                </div>
                <div className="salary">
                    <p className='theTitle'>Salary</p>
                    <p className='theType'>NGN{job?.salary} {job?.pay_rate}</p>
                </div>
            </div>
            <div className="jobDescriptionSection">
                <div className="description">
                    <p> {showMore ? description : `${description?.substring(0, 250)}`}
                        <Link to={'/specificjobs'} state={{ job: job }}> <a href="" onClick={() => navigate('/specificjobs')}>
                            {showMore ? "Show less" : "...Show more"}
                        </a></Link>

                    </p>
                </div>
            </div>
            <div className="boxFooterSection">
                <Link to={'/jobapplication'} state={{ jobid: jobId }}>
                    <p>Apply Now</p></Link>
                <p>.</p>
                <p>Posted 5 days ago</p>
                <p>.</p>
                <p>{job?.location}</p>
            </div>
        </div>
    )
}

export default JobBox