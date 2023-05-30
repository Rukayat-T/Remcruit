import React, { useEffect, useState } from 'react';
import './savedjob.css'
import { Link } from 'react-router-dom';


function SavedJobsPage({ job_seeker_id,specificjob}) {
  const [savedJobs, setSavedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  const fetchSavedJobs = async (job_seeker_id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/jobseekers/${job_seeker_id}/savedjobs`);
      if (response.ok) {
        const data = await response.json();
        
        setSavedJobs(data);
      } else {
        console.error('Failed to fetch saved jobs:', response.status);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching saved jobs:', error);
    }
   
  };
  // function formatSavedTime(created_at) {
  //   const date = new Date(created_at);
  //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return date.toLocaleDateString(undefined, options);
  // }
  const getDaysAgo = (date) => {
    const postDate = new Date(date);
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - postDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };
  
  // const fetchSavedJobs = async (job_seeker_id) => {
  //   try {
  //     const response = await fetch(`http://127.0.0.1:8000/jobseekers/${job_seeker_id}/savedjobs`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setSavedJobs(data);
        
  //       // Update the bookmark state based on the retrieved data
  //       setBookmark(data.includes(job.id));
  //     } else {
  //       console.error('Failed to fetch saved jobs:', response.status);
  //     }
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error('Error fetching saved jobs:', error);
  //   }
  // };
  
  console.log(savedJobs)
  useEffect(() => {
    console.log(fetchSavedJobs(19))
    // fetchSavedJobs(job_seeker_id);
  }, []);


  return (
    <div className="saved-job-main">
      <div className="testing">
        {isLoading ? (
          <p>Loading...</p>
        ) : savedJobs.length > 0 ? (
          savedJobs.map((job) => (
            <div className="saved-jobs-container" key={job.id}>
              <div className="saved-job-details">
                {/* <img src={job.company.logo} alt="Company Logo" className="company-logo" /> */}
                <div className="saved-job-info">
                  <h3>{job.job.title}</h3>
                  <p>{job?.company?.organisation_name}</p>
                  <p>{job.job.location}</p>
                  {/* <p>Saved on  {formatSavedTime(job.created_at)}</p> */}
                  <p>Saved {getDaysAgo(job?.created_at)} days ago</p>
                 
                </div>
                <div className="saved-job-button">
                    <Link to={'/jobapplication'} state={{ jobid: specificjob?.id }}>
                      <button>Apply Now</button>
                    </Link>
                  </div>
              </div>
            </div>
          ))
        ) : (
          <p>No saved jobs yet.</p>
        )}
      </div>
    </div>
  );
}







export default SavedJobsPage;





  