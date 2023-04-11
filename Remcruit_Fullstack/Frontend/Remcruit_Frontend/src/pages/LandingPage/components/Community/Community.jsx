import React from "react";
import "../Steps/Steps.css";

function Community() {
  return (
    <div>
      <div className="main-container">
        <h1>
          Join <span className="colored">our community</span> of
        </h1>
        <div className="community-container">
          <div className="fact">
            <h3>300,000+ Jobs Posted</h3>
          </div>

          <div className="fact">
            <h3>300,000+ Job Seekers</h3>
          </div>

          <div className="fact">
            <h3>300,000+ Employers</h3>
          </div>

          <div className="fact">
            <h3>300,000+ Hired</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
