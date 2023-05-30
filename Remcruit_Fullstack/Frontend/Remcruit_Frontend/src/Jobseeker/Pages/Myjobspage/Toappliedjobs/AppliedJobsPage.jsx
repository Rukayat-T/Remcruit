import React, { useEffect, useState } from 'react';
import './AppliedJobsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faDotCircle, faListDots, faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';


function AppliedJobsPage({ job_seeker_id }) {
  const [jobapplication, setJobApplication] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [filterStatus, setFilterStatus] = useState(''); // State variable for the selected filter

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

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

  useEffect(() => {
    fetchAppliedJobs(19);
  }, []);

  const handleUpdateStatus = (status) => {
    setSelectedStatus(status);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedStatus('');
  };

  const handleStatusChange = async (id) => {
    try {
      const updatedJobApplication = jobapplication.map(job => {
        if (job.status === selectedStatus) {
          return { ...job, status: selectedStatus };
        }
        return job;
      });
      setJobApplication(updatedJobApplication);
  
      const response = await fetch(`http://127.0.0.1:8000/employers/updateApplicationStatus/${id}`);
      if (response.ok) {
        // Handle successful update
      } else {
        console.error('Failed to update status:', response.status);
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  
    handlePopupClose();
  };
  

  // const handleStatusChange = async (id) => {
  //   try {
  //     const response = await fetch(`http://127.0.0.1:8000/employers/updateApplicationStatus/${id}`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setJobApplication(data);
  //     } else {
  //       console.error('Failed to updatestatus:', response.status);
  //     }
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error('Error updating status:', error);
  //   }
  

  //   const updatedJobApplication = jobapplication.map(job => {
  //     if (job.status === selectedStatus) {
  //       return { ...job, status: selectedStatus };
  //     }
  //     return job;
  //   });
  //   setJobApplication(updatedJobApplication);

  //   handlePopupClose();
  // };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredJobApplication = filterStatus
    ? jobapplication.filter(job => job.status === filterStatus)
    : jobapplication;


console.log(filteredJobApplication)
  return (
    <div className="appliedjobs-main">
      <div className="applied">
        <div className="filter-container">
          <label htmlFor="status-filter">Filter by Status:</label>
          <select id="status-filter" value={filterStatus} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="ACCEPTED">Accepted</option>
            <option value="OFFER_SENT">Offer Sent</option>
            <option value="INTERVIEW">Interview</option>
            <option value="DECLINED">Declined</option>
            <option value="OFFER_DECLINED">Offer Declined</option>
            <option value="IN_REVIEW">In Review</option>
          </select>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : filteredJobApplication.length > 0 ? (
          <div className="appliedJobsList">
            {filteredJobApplication.map(job => (
              <div className="appliedJobItem" key={job.id} >
                 {/* <img src={job.company.company_logo} alt="Company Logo" className="company-logo" />   */}
                <div className="applied-job-info">
                  <h3>{job.job.title}</h3>
                  <p>{job?.company?.organisation_name}</p>
                  <p>{job.job.location}</p>
                  
                 
                </div>
                <div className="statusupdtaes"  >
                  <p data-status={job.status}> • {job.status}</p>
                  <button onClick={() => handleUpdateStatus(job.status)}>Update Status</button>
                  </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No applied jobs yet.</p>
        )}
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <h3>Update Status</h3>
            <p>Select the new status:</p>
            {/* Add options for selecting the new status */}
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="ACCEPTED">Accepted</option>
              <option value="OFFER_SENT">Offer Sent</option>
              <option value="INTERVIEW">Interview</option>
              <option value="DECLINED">Declined</option>
              <option value="OFFER_DECLINED">Offer Declined</option>
              <option value="IN_REVIEW">In Review</option>
            </select>
            <div className="popup-buttons">
              <button onClick={handlePopupClose}>Cancel</button>
              <button onClick={handleStatusChange}>Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default AppliedJobsPage;
