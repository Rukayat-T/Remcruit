import React, { useEffect, useState } from "react";
import ChannelsLogo from "./channels.png";
import TotalLogo from "./total.png";
import { Link } from "react-router-dom";

function MostPopular() {
    const [jobs, setJobs] = useState([])
  
const fetchjobs = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/employer/AllJobs/"
      ).then((response) => response.json());
      setJobs(response.slice(0, 6));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchjobs();
  }, []);
  const [showMore, setShowMore] = useState(false);
  const description = jobs?.description;
  return (
    <div>
      <div className="main-container">
        <div className="most-popular-main-content">
          <h1>
            Most <span className="colored">Popular Jobs</span>
          </h1>
          <p className="headdd">
            Discover the fresh job openings from top firms which you might want
            to apply and take a chance to get hired
          </p>
          <div className="most-popular-job-cards">
          {jobs.map((job, index) => (
             <div className="most-poplar-card">
             <div className="most-popular-header">
               <img
                 src={TotalLogo}
                 alt=""
               />
               <div className="infod">
                 <h3 className="company-title">{job.company.organisation_name}</h3>
                 <p>time</p>
               </div>
             </div>
             <div className="most-card-content">
               <h3>{job.title}</h3>
               <p>{showMore ? job.description : `${job.description?.substring(0, 70)}`}
              {showMore ? "" : "..."}</p>
             </div>
             <div className="most-card-button">
             <Link to={'/specificjobs'} state={{ job: job }}> <button className="detailsBtn">View Details</button></Link>
             </div>
           </div>
        )
        )}
           

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
