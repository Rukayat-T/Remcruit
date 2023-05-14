import React, { useState } from "react";
import "../static/SpecificComponents.css";
import GloLogo from "../static/Frame.png";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TestCards({ job, getDisplayedJob, GetClickedJob}) {
  const [jobClicked, setBoxClicked] = useState();

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
              <FontAwesomeIcon icon={faBookmark} />
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
              Posted 2 days ago • From <span>{job?.location}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCards;
