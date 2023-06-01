import React, { useContext, useState } from "react";
import "../static/SpecificComponents.css";
import GloLogo from "../static/Frame.png";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons'
import AuthContext from '../../../../context/AuthContext';

function TestCards({ job, getDisplayedJob, GetClickedJob}) {
  const [jobClicked, setBoxClicked] = useState();
  const [bookmark, setBookmark] = useState(false);
 
  let{jobseeker} = useContext(AuthContext)
  console.log(jobseeker)

  const handleJobClick = (clickedjob) => {
    setBoxClicked(clickedjob);
    getDisplayedJob(clickedjob);
    GetClickedJob(clickedjob)
  };

  const status = () => {
    if (job?.is_remote_opportunity === false) {
      return "On-site";
    } else {
      return "Remote";
    }
  };

  const getDaysAgo = (date) => {
    const postDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };
  const savingJob = async (jobId, jobSeekerId) => {
    console.log("i clicked a job")
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




function toggleBookmark(jobId,jobSeekerId) {
    
    setBookmark(!bookmark);
    savingJob(jobId,jobSeekerId)
    console.log(jobId)
    
 
    
}

  const [showMore, setShowMore] = useState(false);
  const description = job?.description;

  return (
    <div>
      <div
        className="jobs-card-container"
        onClick={() => {
          handleJobClick(job);
        }}
      >
        <div className="jobs-card-content">
          <div className="jobs-card-header">
            <div className="card-logo">
              <img
                src={GloLogo}
                alt=""
              />
            </div>
            <div className="header-job-title">
              <h1>{job?.title}</h1>
              <p>{job?.company?.organisation_name}</p>
            </div>
            <div className="share-save">
            <button onClick={() => {toggleBookmark(job?.id, jobseeker?.id)}} className='bookmarkBtn'>
                      
                      {bookmark  ? <FontAwesomeIcon icon={filledBookmark} className='bookmark' />:<FontAwesomeIcon icon={regularBookmark} className='bookmark' /> }
                  </button>
            </div>
          </div>
          <div className="jobs-card-description">
            <p>
              {showMore ? description : `${description?.substring(0, 150)}`}
              {showMore ? "" : "..."}
            </p>
          </div>
          <div className="jobs-card-cards">
            <div className="job-card">
              <p>{job?.job_type}</p>
            </div>
            <div className="job-card">
              <p>{status()}</p>
            </div>
            <div className="job-card">
              <p>Urgent</p>
            </div>
          </div>
          <div className="horizontal-line"></div>
          <div className="jobs-card-footer">
            <p>
              Posted {getDaysAgo(job?.created_at)} days ago • From <span>{job?.location}</span>{" "}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCards;
