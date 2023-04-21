import React from "react";

function BasicInformation({postdata, setPostData}) {
  return (
    <div>
      <div className="job-post-form-container">
        <form action="">
            <div className="all-inputs">
            <div className="each-input">
            <label htmlFor="title">Position Title  <span className="red">*</span></label>
            <input
              type="text"
              id="title"
              required
            />
          </div>

          <div className="each-input">
            <label htmlFor="vacancy">Vacancies</label>
            <input
              type="number"
              id="vacancy"
            />
          </div>

          <div className="each-input">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
            />
          </div>

          <div className="each-input">
          <label htmlFor="salary">Job Type</label>
              <select
                id="duration"
                name="duration"
              >
                <option value="oneweek">Full Time</option>
                <option value="onemonth">Part Time</option>
                <option value="threemonths">Internship</option>
              </select>
            </div>

          <div className="each-input">
            <label htmlFor="salary">Salary/Month</label>
            <input
              type="text"
              id="salary"
            />
          </div>

          <div className="each-input textarea">
            <label htmlFor="description">Job Description <span className="red">*</span></label>
            <textarea name="description" id="description" cols="135" rows="10"></textarea>
          </div>

          <div className="each-input textarea">
            <label htmlFor="responsibilities">Key Responsibilities <span className="red">*</span></label>
            <textarea name="responsibilities" id="responsibilities" cols="135" rows="10"></textarea>
          </div>

            </div>
        </form>
      </div>
    </div>
  );
}

export default BasicInformation;
