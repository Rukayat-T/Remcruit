import React from "react";
import "../static/JobPost.css";

function CommunicationSettings() {
  return (
    <div>
      <div className="comm-main-container">
        <label>
          Send daily updates about this job and applications to:{" "}
          <span className="red">*</span>
        </label>
        <div className="comm">
          <input
            type="email"
            name=""
            id=""
          />
        </div>

        <div className="input">
          <input
            type="radio"
            id="title"
            required
          />
          <label htmlFor="title">
            Also send an individual email update each time someone applies.
          </label>
        </div>

        <p>Let potential candidates call you directly about this job</p>
        <div className="comm">
          <input
            type="tel"
            name=""
            id=""
          />
        </div>
        <p>By entering your phone number, you agree to receive calls and text messages from Indeed and potential candidates related to this job posting</p>
      </div>
    </div>
  );
}

export default CommunicationSettings;
