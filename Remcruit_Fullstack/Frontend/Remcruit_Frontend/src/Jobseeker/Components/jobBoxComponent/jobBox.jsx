import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons'
import './jobBox.css'
import JobSeekerContext from '../../../context/JobSeekerContext'
import AuthContext from '../../../context/AuthContext'

// import toggleBookmark from '../../Pages/SpecificJobsPage/components/FullJobDescription/toggleBookmark';
// import savedjobs from '../savedjobsComponents/savedjobs'

function JobBox({ job }) {


    let { jobSeeker } = useContext(JobSeekerContext)
    
    const [bookmark, setBookmark] = useState(false);
    const navigate = useNavigate()


    let{jobseeker} = useContext(AuthContext)
   console.log(jobseeker)

//    const [isBookmarked, setIsBookmarked] = useState(false);

   

    const savingJob = async (jobId, jobSeekerId) => {
        try {
            let res = await fetch("http://127.0.0.1:8000/jobseekers/saveajob/",
            
              {
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "job": jobId,
                    "job_seeker": jobSeekerId
                }),
              });
            let resJson = await res.json();
            if (res.status === 200) {
              console.log(resJson)
             
            } else {
              console.log(resJson)
              alert("something went wrong")
            }
          } catch (err) {
            console.log(err);
          }
         
        };

    
    
        const toggleBookmark = async (jobId, jobSeekerId) => {
            try {
              setBookmark(!bookmark);
              await savingJob(jobId, jobSeekerId);
              // Update the bookmark status on the server
            } catch (error) {
              console.log(error);
            }
          };
          
    // function toggleBookmark(jobId,jobSeekerId) {
        
    //     setBookmark(!bookmark);
    //     savingJob(jobId,jobSeekerId)
    // }


    // const toggleBookmark = () => {
    //     if (bookmark === "false") {
    //         setBookmark("true")
    //         return;
    //     }
    //     setBookmark("false")
    // }
    const [jobId, setJobId] = useState(job.id)
    const [showMore, setShowMore] = useState(false);

    const description = job?.description

    const getDaysAgo = (date) => {
        const postDate = new Date(date);
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - postDate.getTime();
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
        return daysDifference;
      };
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
                <button onClick={() => {toggleBookmark(job.id, jobseeker.id)}} className='bookmarkBtn'>
                      
                      {bookmark  ? <FontAwesomeIcon icon={filledBookmark} className='bookmark' />:<FontAwesomeIcon icon={regularBookmark} className='bookmark' /> }
                  </button>
                    {/* <toggleBookmark /> */}
                    <Link to={'/specificjobs'} state={{ job: job }}> <button className="detailsBtn">View Details</button></Link>

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
                <p>Posted {getDaysAgo(job?.created_at)} days ago</p>
                <p>.</p>
                <p>{job?.location}</p>
            </div>
        </div>
    )
}

export default JobBox