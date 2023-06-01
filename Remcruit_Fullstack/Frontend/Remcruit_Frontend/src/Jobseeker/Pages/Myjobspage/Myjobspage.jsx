import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faker } from '@faker-js/faker';
import SavedJobsPage from './SavedJobspage/SavedJobsPage';
import CompanyBox from '../../Components/companyBox/companyBox'
import AuthContext from '../../../context/AuthContext'
import JobSeekerContext from '../../../context/JobSeekerContext'
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn';
import Toappliedjobs from './Toappliedjobs/AppliedJobsPage';
import './Myjob.css';
import Footer from '../../../components/Footer/Footer';
import AppliedJobsPage from './Toappliedjobs/AppliedJobsPage';

function Myjobspage({ job_seeker_id,  }) {
  const { user } = useContext(AuthContext);
  const { jobseeker, jobSeeker } = useContext(JobSeekerContext);
  const [archivedJobs, setArchivedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [savedJobs, setSavedJobs] = useState([]);
  const [page, setPage] = useState(0)
  const navigate = useNavigate();
  const [jobapplication, setJobApplication] = useState([]);
  const randomAvatar = faker.image.avatar();
  
  useEffect(() => {
    jobSeeker();
    jobseeker;
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
  const fetchAppliedJobs = async (job_seeker_id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/jobseekers/${job_seeker_id}/application`);
      if (response.ok) {
        const data = await response.json();
        setJobApplication(data);
      } else {
        console.error('Failed to fetch applied jobs:', response.status);
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching applied jobs:', error);
    }
  };

  console.log(savedJobs)
  useEffect(() => {
    console.log(fetchSavedJobs(19))
    // fetchSavedJobs(job_seeker_id);
  }, []);



  useEffect(() => {
    fetchSavedJobs((19));
  }, [job_seeker_id]);

  
console.log(jobapplication)
  useEffect(() => {
    console.log(fetchAppliedJobs(19));
  }, []);

  useEffect(() => {
    fetchAppliedJobs(19);
  }, [job_seeker_id]);

  const back = () => {
    navigate('/home');
  };


  const [MyJob, setMyJob] = useState(savedJobs.id)
  const [AppliedJob, setAppliedJob]= useState(jobapplication.id)

  const pageDisplay = () => {
    if (page === 0) {
        return <SavedJobsPage MyJob={MyJob} setMyJob={setMyJob} />
    }
    if (page === 1) {
        return <AppliedJobsPage AppliedJob={AppliedJob} setAppliedJob={setAppliedJob} />
    }
    // if (page === 2) {
    //     return <Toarchivejobs  />
    // }
    // if (page === 3) {
    //     return <Tointerview/>
    // }
}

  return (
    <div>
      <NavbarSignedIn/>
      <div className="my-jobs-page-main-container">
      
      {/* <div className="profile-main-container">
        <div className="profile-header">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#000000' }} onClick={back} />
          <img src={randomAvatar} alt="" />
          <h1>Hi, {user.first_name}</h1>
        </div>
        <div className="hori"></div>
      </div> */}

      <div className="spotlightSectionContainer">
      <p> My Jobs </p>
  
      </div>
      
      <div className="pages-tabs">
                            <p className={page === 0 ? "activePages" : ""} onClick={() => { setPage(0) }}>Saved Jobs</p>
                            <p className={page === 1 ? "activePages" : ""} onClick={() => { setPage(1) }}>Applied Jobs</p>
                            {/* <p className={page === 2 ? "activePages" : ""} onClick={() => { setPage(2) }}>Archived Jobs</p>
                            <p className={page === 3 ? "activePages" : ""} onClick={() => { setPage(3) }}>Interviews</p> */}
                        </div>
                        <div className="myjobs-body">
                            {pageDisplay()}

                        </div>
                        <Footer />
     
                        </div>
      
    </div>
  );
}

export default Myjobspage;


{/* <h1>Saved Jobs</h1>
      
{isLoading ? (
  <p>Loading...</p>
) : savedJobs.length > 0 ? (
  <ul>
     {savedJobs.map(job => (
      <div className="testing">
         
          <li key={job.id}>{job.job.title}
          </li>
        
          </div>
         
      
    
    ))}


  </ul>
) : (
  <p>No saved jobs yet.</p>
)} */}