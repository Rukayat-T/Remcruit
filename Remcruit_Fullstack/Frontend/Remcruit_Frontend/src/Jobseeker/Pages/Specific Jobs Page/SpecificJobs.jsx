import React, { useEffect, useState } from "react";
import NavbarSignedIn from "../../Components/navbarSignedin/NavbarSignedIn";
import "./static/SpecificJobs.css";
import FullJobDescription from "./components/FullJobDescription";
import { useLocation } from "react-router";
import TestCards from "./components/TestCards";

function SpecificJobs() {
  const [job, setJob] = useState([]);
  const location = useLocation();
  const specificjob = location.state.job;
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchjobs = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/employer/AllJobs/"
      ).then((response) => response.json());
      setJob(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchjobs();
  }, []);

  const [displayJob, setDisplayJob] = useState();
  const getDisplayedJob = (certainJob) => {
    setDisplayJob(certainJob);
  };
  const newArrayJobs = [
    specificjob,
    ...job?.filter((job) => job?.id !== specificjob?.id),
  ];

  const [flat, setFlat] = useState([]);

  const handleJobClicked = (clickedjob) => {
    const index = newArrayJobs.findIndex((i) => i.id === clickedjob?.id);
    const newJobs = [
      clickedjob,
      ...newArrayJobs.slice(0, index),
      ...newArrayJobs.slice(index + 1),
    ]; 
    setFlat(newJobs);
  };

  const GetClickedJob = (select) => {
    setSelectedJob(select);
    handleJobClicked(select);
  };

  return (
    <div className="specific">
      <div className="specific-nav">
        <NavbarSignedIn />
      </div>
      <div className="specific-job-body">
        <div className="specific-jobs-main">
          <div className="specific-left">
            <div className="content">
              {newArrayJobs?.length > 0 ? (
                newArrayJobs.map((job, index) => (
                  <TestCards
                    key={job?.id + job?.title}
                    job={job}
                    getDisplayedJob={getDisplayedJob}
                    flat={flat}
                    handleJobClicked={handleJobClicked}
                    GetClickedJob={GetClickedJob}
                  />
                ))
              ) : (
                <p>No jobs to display</p>
              )}
            </div>
          </div>
          <div className="specific-right">
            <FullJobDescription
              specificjob={specificjob}
              showDescription={displayJob}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificJobs;
