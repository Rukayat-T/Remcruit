import React, { useState } from "react";

function BasicInformation({ postdata, setPostData }) {
  const [jobtype, setJobType] = useState()
  // console.log(jobtype)

  // const dataCheck = (e) => {
  //   e.preventDefault()
  //   console.log(postdata)
  // }
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
                value={postdata.title}
                onChange={(e) => setPostData({ ...postdata, title: e.target.value })}
              />
            </div>

            <div className="each-input">
              <label htmlFor="vacancy">Vacancies</label>
              <input
                type="number"
                id="vacancy"
                value={postdata.open_spots}
                onChange={(e) => setPostData({ ...postdata, open_spots: e.target.value })}
              />
            </div>

            <div className="each-input">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                value={postdata.location}
                onChange={(e) => setPostData({ ...postdata, location: e.target.value })}
              />
            </div>

            <div className="each-input">
              <label htmlFor="salary">Job Type</label>
              <select
                id="duration"
                name="duration"
                value={postdata.job_type}
                onChange={(e) => setPostData({ ...postdata, job_type: e.target.value })}
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="each-input">
              <label htmlFor="salary">Salary/Month</label>
              <input
                type="text"
                id="salary"
                value={postdata.salary}
                onChange={(e) => setPostData({ ...postdata, salary: e.target.value })}
              />
            </div>

            <div className="each-input textarea">
              <label htmlFor="description">Job Description <span className="red">*</span></label>
              <textarea name="description" id="description" cols="135" rows="10"
                value={postdata.description}
                onChange={(e) => setPostData({ ...postdata, description: e.target.value })}

              ></textarea>
            </div>

            <div className="each-input textarea">
              <label htmlFor="responsibilities">Skills Required <span className="red">*</span></label>
              <textarea name="responsibilities" id="responsibilities" cols="135" rows="10"
                value={postdata.skills_required}
                onChange={(e) => setPostData({ ...postdata, skills_required: e.target.value })}
              ></textarea>
            </div>
            {/* <button onClick={dataCheck}>Click me</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicInformation;
