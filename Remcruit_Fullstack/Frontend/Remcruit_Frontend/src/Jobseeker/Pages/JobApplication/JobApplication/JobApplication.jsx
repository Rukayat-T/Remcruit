import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Vector from "../static/Vector.png";
import "./JobApplication.css";
import JobApplicationForm from "../JobApplicationForm";
import { useLocation } from "react-router";
import AuthContext from "../../../../context/AuthContext";
import JobSeekerContext from "../../../../context/JobSeekerContext";

function JobApplication() {
  const { page, setPage, data, title, canSubmit } = JobApplicationForm();

  const handlePrevious = () => setPage((prev) => prev - 1);
  const handleNext = () => setPage((prev) => prev + 1);

  let { user } = useContext(AuthContext)
  let { jobSeeker, jobseeker } = useContext(JobSeekerContext)

  const location = useLocation()
  const id = location.state.jobid

  useEffect(() => {
    jobSeeker()
  }, [])

  // console.log(jobseeker?.id)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await fetch("http://0.0.0.0:8000/jobseekers/job/1/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "job_seeker": jobseeker.id,
        "job": id,
        "credential": 1,
      }),
    });
    console.log(response)
  };

  return (
    <div>
      <Navbar />
      <div className="jobapplication-main-container">
        <div className="jobapplication-container">
          <div className="jobapplication-content">
            <h1>Application Form</h1>
            <div className="progress-bars">
              <div className="bar one active">
                <p className="title">STEP ONE</p>
                <p>Your Personal Information</p>
              </div>
              <div className="bar two">
                <p className="title">STEP TWO</p>
                <p>Upload your CV</p>
              </div>
              <div className="bar three">
                <p className="title">STEP THREE</p>
                <p>Employer Questions</p>
              </div>
            </div>
          </div>

          <form
            className="application-form"
            onSubmit={handleSubmit}
          >
            <div className="appl-button-container">
              <button
                type="button"
                onClick={handlePrevious}
              >
                Back
              </button>
              <button
                type="button"
              >
                Continue
              </button>

              <button
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <img
          src={Vector}
          alt=""
        />
      </div>
    </div>
  );
}

export default JobApplication;