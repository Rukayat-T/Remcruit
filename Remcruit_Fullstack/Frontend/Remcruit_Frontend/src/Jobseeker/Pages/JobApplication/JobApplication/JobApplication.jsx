import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Vector from "../static/Vector.png";
import "./JobApplication.css";
import JobApplicationForm from "../JobApplicationForm";

function JobApplication() {
  const { page, setPage, data, title, canSubmit } = JobApplicationForm();

  const handlePrevious = () => setPage((prev) => prev - 1);
  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = async (e) => {
    let response = await fetch("http://127.0.0.1:8000/authentication/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    console.log(JSON.stringify(data));
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
                onClick={handleNext}
              >
                Continue
              </button>

              <button
                type="submit"
                disabled={!canSubmit}
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
