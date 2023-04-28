import React, { useState } from "react";
import GloLogo from "../static/Frame.png";
import { faBookmark} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function JobCards({specificjob, singlejob}) {
    console.log(singlejob)
    const status = () => {
        if(specificjob.is_remote_opportunity === false){
            return (
                "On-site"
            )
        }
        else {
            return (
                "Remote"
            )
        }
    }
    const [showMore, setShowMore] = useState(false);
    const description = specificjob?.description

    const [each, setEach] = useState(singlejob)
    
  return (
    <div>
      <div className="jobs-card-container">
        <div className="jobs-card-content">
          <div className="jobs-card-header">
            <div className="card-logo">
              <img
                src={GloLogo}
                alt=""
              />
            </div>
            <div className="header-job-title">
              <h1>{specificjob?.title}</h1>
              <p>{specificjob?.company?.organisation_name}</p>
            </div>
            <div className="share-save">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
          <div className="jobs-card-description">
            <p>{showMore ? description : `${description?.substring(0,150)}`}
            {showMore ? "" : "..."}
            </p>
          </div>
          <div className="jobs-card-cards">
            <div className="job-card">
                <p>{specificjob?.job_type}</p>
            </div>
            <div className="job-card">
                <p>{status()}</p>
            </div>
            <div className="job-card">
                <p>Urgent</p>
            </div>
          </div>
          <div className="horizontal-line">
        </div>
        <div className="jobs-card-footer">
            <p>Posted 2 days ago • From <span>{specificjob?.location}</span> </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default JobCards;
