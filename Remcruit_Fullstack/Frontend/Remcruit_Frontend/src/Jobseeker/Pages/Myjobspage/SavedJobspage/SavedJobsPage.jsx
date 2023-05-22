import React, { useEffect, useState } from 'react';
import './savedjob.css'

function SavedJobsPage({ job_seeker_id}) {
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
  console.log(savedJobs)
  useEffect(() => {
    console.log(fetchSavedJobs(19))
    // fetchSavedJobs(job_seeker_id);
  }, []);


  return (
    <div>
       
      {isLoading ? (
        <p>Loading...</p>
      ) : savedJobs.length > 0 ? (
        <ul>
          {savedJobs.map(job => (
            <div className="testing">
         
                <li key={job.id}>{job.job.title}>{comp}</li>
                </div>
                
            
          
          ))}
        </ul>
      ) : (
        <p>No saved jobs yet.</p>
      )}  

     </div>
     
      
    
    
  );
}

export default SavedJobsPage;





  