import React, { useContext, useEffect, useState } from 'react'
import '../static/SpecificComponents.css'
import GloLogo from '../static/Frame.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faBookmark} from '@fortawesome/free-regular-svg-icons'
import { faBookmark as filledBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import AuthContext from '../../../../context/AuthContext';


function FullJobDescription({specificjob, showDescription}) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [jobs, setJobs] = useState(null);
   
    let{jobseeker} = useContext(AuthContext)
   console.log(jobseeker)
   



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

      
    
    const DisplayFullDescription = () => {
        

        if (showDescription){
            return(
                <div className="job-description-main-container">
            <div className="description-main-content">
                <div className="description-header">
                    <div className="random">
                        <img src={GloLogo} alt="" />
                    </div>
                    <div className="header-job-title">
                            <h1>{showDescription?.title}</h1>
                            <p>{showDescription?.company?.organisation_name}</p>
                        </div>
                    <div className="share-save">
                    <FontAwesomeIcon icon={faShareNodes}/>
                    {/* <FontAwesomeIcon icon={faBookmark}  /> */}
                    <button onClick={() => {toggleBookmark(showDescription?.id, jobseeker?.id)}} className='bookmarkBtn'>
                      
                        {bookmark  ? <FontAwesomeIcon icon={filledBookmark} className='bookmark' />:<FontAwesomeIcon icon={regularBookmark} className='bookmark' /> }
                    </button>
                    </div>
                </div>
                <div className="horizontal-line">
                </div>
                <div className="scrollable-description">
                <div className="content-cards">
                    <div className="content-card cardone">
                        <p>Job Type</p>
                        <p className='dynamic'>{showDescription?.job_type}</p>
                    </div>
                    <div className="content-card cardtwo">
                        <p>Location</p>
                        <p className='dynamic'>{showDescription?.location}</p>
                    </div>
                    <div className="content-card cardthree">
                        <p>Salary</p>
                        <p className='dynamic'>NGN {showDescription?.salary}</p>
                    </div>
                </div>
                <div className="description-description">
                    <h1>Job Description</h1>
                    <p> {showDescription?.description}
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
                <Link to={'/jobapplication'} state={{ jobid: showDescription?.id }}><button>Apply Now</button></Link>
                </div>
            </div>
            </div>
        </div>
            )
        }
        else{
           return (
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
                    <button onClick={() => {toggleBookmark(specificjob.id, jobseeker.id)}} className='bookmarkBtn'>
                      
                        {bookmark  ? <FontAwesomeIcon icon={filledBookmark} className='bookmark' />:<FontAwesomeIcon icon={regularBookmark} className='bookmark' /> }
                    </button>
                    {/* <button onClick={() => setJob({ ...job, bookmark: true })}>Save Job</button> */}
                    {/* <button onClick={() => {handleBookmark(specificjob.id, jobseeker.id)}}>{isBookmarked ? "Bookmarked" : " Bookmark"}</button> */}
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
                <Link to={'/jobapplication'} state={{ jobid: specificjob?.id }}><button>Apply Now</button></Link>
                </div>
            </div>
            </div>
        </div>
           ) 
        }
    }
  return (
    <div>
        {DisplayFullDescription()}
      
    </div>
  )
}

export default FullJobDescription









//     useEffect(() => {
//         fetch(`http://127.0.0.1:8000/employer/job/${jobId}`)
//           .then(response => response.json())
//           .then(jobData => setJobs(jobData))
//           .catch(error => console.error(error));
//       }, [jobId]);

//       useEffect(() => {
//         console.log(bookmark);
//         console.log(jobs);
//         if (bookmark && jobs) {
//           saveJob(jobs[0].id, jobSeekerId);
//         }
//       }, [bookmark, jobs, jobSeekerId]);
      


//   function saveJob(jobId, jobSeekerId) {
//   const jobToSave = jobs.find(job => job.id === jobId);
//   if (jobToSave) {
//     console.log("Saving bookmarked job to database:", jobId, "for job seeker", jobSeekerId);
//     fetch(`http://127.0.0.1:8000/jobseekers/saveajob/`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         jobId: jobToSave.id,
//         jobSeekerId
//       })
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Job bookmarked!');
//         } else {
//           console.error('Failed to bookmark job.');
//         }
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   } else {
//     console.error(`Could not find job with ID ${jobId}`);
//   }
// }
// function handleBookmark() {
//     setIsBookmarked(!isBookmarked);
//     setBookmark(!bookmark);
//   }