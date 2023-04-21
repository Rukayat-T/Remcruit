import React from "react";

function JobDetails() {
  return (
    <div>
      <div className="job-post-form-container">
        <form action="">
          <div className="all-inputs">
            <div className="radio-input">
              <p>Is this a remote oppurtunity</p>
              <div className="input-section">
                <div className="input-yes">
                  <input
                    type="radio"
                    id="title"
                    required
                  />
                  <label htmlFor="title">Yes</label>
                </div>
                <div className="input-no">
                  <input
                    type="radio"
                    id="title"
                    required
                  />
                  <label htmlFor="title">No</label>
                </div>
              </div>
            </div>

            <div className="radio-input">
              <p>Is a CV required for this job?</p>
              <div className="input-section">
                <div className="input-yes">
                  <input
                    type="radio"
                    id="title"
                    required
                  />
                  <label htmlFor="title">Yes</label>
                </div>
                <div className="input-no">
                  <input
                    type="radio"
                    id="title"
                    required
                  />
                  <label htmlFor="title">No</label>
                </div>
              </div>
            </div>

            <div className="radio-input">
              <p>Is a experience for this job?</p>
              <div className="input-section">
                <div className="input-yes">
                  <input
                    type="radio"
                    id="title"
                    required
                  />
                  <label htmlFor="title">Yes</label>
                </div>
                <div className="input-no">
                  <input
                    type="radio"
                    id="title"
                    required
                  />
                  <label htmlFor="title">No</label>
                </div>
              </div>
            </div>
            <div className="date-main-section">
              <div className="radio-input date-section">
                <p>
                  Job Start Date <span className="red">*</span>
                </p>
                <div className="input-yes">
                  <input
                    type="date"
                    id="title"
                    required
                  />
                </div>
              </div>

              <div className="radio-input date-section">
                <p>
                  Application Deadline <span className="red">*</span>
                </p>
                <div className="input-yes">
                  <input
                    type="date"
                    id="title"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="radio-input date-section">
              <p>Job Post Duration</p>
              <select
                id="duration"
                name="duration"
              >
                <option value="oneweek">14 days</option>
                <option value="onemonth">A month</option>
                <option value="threemonths">Three months</option>
              </select>
            </div>

            <div className="radio-input date-section third">
              <p>Degree Classification</p>
              <select
                id="duration"
                name="duration"
              >
                <option value="oneweek">First Class Honours</option>
                <option value="onemonth">Second Class Honours(upper)</option>
                <option value="threemonths">Second Class Honours(lower)</option>
                <option value="threemonths">Third Class Honours</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobDetails;
