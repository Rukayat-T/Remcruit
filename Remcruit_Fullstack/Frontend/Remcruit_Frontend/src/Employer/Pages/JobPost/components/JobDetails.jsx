import React, { useState } from "react";

function JobDetails({postdata, setPostData}) {

  // const dataCheck = (e) => {
  //   e.preventDefault()
  //   console.log(postdata)
  // }
  
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
                    id="remote"
                    value={"True"}
                    name="remote"
                    onChange={(e) => setPostData({...postdata, is_remote_oppurtunity: e.target.value})}
                  />
                  <label htmlFor="remote">Yes</label>
                </div>
                <div className="input-no">
                  <input
                    type="radio"
                    id="no"
                    name="remote"
                    value="False"
                    onChange={(e) => setPostData({...postdata, is_remote_oppurtunity: e.target.value})}
                  />
                  <label htmlFor="no">No</label>
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
                    value={"True"}
                    name="cv"
                    onChange={(e) => setPostData({...postdata, is_cv_required: e.target.value})}
                  />
                  <label htmlFor="title">Yes</label>
                </div>
                <div className="input-no">
                  <input
                    type="radio"
                    id="title"
                    required
                    value={"False"}
                    name="cv"
                    onChange={(e) => setPostData({...postdata, is_cv_required: e.target.value})}
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
                    value={"True"}
                    name="experience"
                    onChange={(e) => setPostData({...postdata, is_experience_required: e.target.value})}

                  />
                  <label htmlFor="title">Yes</label>
                </div>
                <div className="input-no">
                  <input
                    type="radio"
                    id="title"
                    required
                    value={"False"}
                    name="experience"
                    onChange={(e) => setPostData({...postdata, is_experience_required: e.target.value})}

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
                    value={postdata.resumption}
                    onChange={(e) => setPostData({...postdata, resumption: e.target.value})}

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
                    value={postdata.application_deadline}
                    onChange={(e) => setPostData({...postdata, application_deadline: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="radio-input date-section">
                <p>
                  Job Post Duration <span className="red">*</span>
                </p>
                <div className="input-yes">
                  <input
                    type="date"
                    id="title"
                    required
                    value={postdata.job_post_duration}
                    onChange={(e) => setPostData({...postdata, job_post_duration: e.target.value})}

                  />
                </div>

            {/* <div className="radio-input date-section input-yes">
              <p>Job Post Duration</p>
              <input
                    type="date"
                    id="title"
                    required
                    value={postdata.job_start_date}
                    onChange={(e) => setPostData({...postdata, job_start_date: e.target.value})}

                  />
              {/* <select
                id="duration"
                name="duration"
                value={postdata.job_post_duration}
                onChange={(e) => setPostData({...postdata, job_post_duration: e.target.value})}
              >
                <option value="14 days" >14 days</option>
                <option value="Thirty days">30 days</option>
                <option value="Six weeks">6 weeks</option>
              </select> */}
            </div> 

            <div className="radio-input date-section third">
              <p>Degree Classification</p>
              <select
                id="duration"
                name="duration"
                value={postdata.degree_classification}
                onChange={(e) => setPostData({...postdata, degree_classification: e.target.value})}
              >
                <option value="First Class Honours">First Class Honours</option>
                <option value="Second Class Honours(upper)">Second Class Honours(upper)</option>
                <option value="Second Class Honours(lower)">Second Class Honours(lower)</option>
                <option value="Third Class Honours">Third Class Honours</option>
              </select>
            </div>
          </div>
          {/* <button onClick={dataCheck}>Click me</button> */}

        </form>
      </div>
    </div>
  );
  
}

export default JobDetails;
