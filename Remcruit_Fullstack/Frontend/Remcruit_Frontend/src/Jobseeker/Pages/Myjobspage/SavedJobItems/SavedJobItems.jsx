import React, {useEffect,useState} from 'react'


function SavedJobItems({Savedjobs}) {
    console.log(Savedjobs)
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
     
        fetch(`http://127.0.0.1:8000/jobseekers/${job_seeker_id}/savedjobs`)
          .then(response => response.json())
          .then(data => setSavedJobs(data))
          .catch(error => console.log(error));
      }, [Savedjobs.job_seeker_id]);
      return (
        <div>
          <h1>Saved Jobs</h1>
          {savedJobs.length > 0 ? (
            <ul>
              {savedJobs.map(job => (
                <li key={job.id}>{job.title}</li>
              ))}
            </ul>
          ) : (
            <p>No saved jobs yet.</p>
          )}
        </div>
      );
}










    // const GetSavedJobsbyid = async ( job_seeker_id) => {
    //     try{
    //         const response = await fetch
    //          (`http://127.0.0.1:8000/jobseekers/${job_seeker_id}/savedjobs`)
    //          .then((response) => response.json());
        
    //         setSavedJobs(response)
    //     }
    //     catch (error) {
    //         console.log(error)

    //     }
        
      
      
      
    // } 





export default SavedJobItems




