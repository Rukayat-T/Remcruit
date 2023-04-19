import React, { useContext, useEffect, useState } from "react";
import Vector from "../static/Vector.png";
import "../static/JobApplication.css";
import { useLocation, useNavigate } from "react-router";
import AuthContext from "../../../../context/AuthContext";
import JobSeekerContext from "../../../../context/JobSeekerContext";
import FormContext from "../context/FormContext";
import NavbarSignedIn from "../../../Components/navbarSignedin/NavbarSignedIn";

function JobApplication() {
  let { user } = useContext(AuthContext)
  let {jobSeeker, jobseeker} = useContext(JobSeekerContext)
  let {next, back, page, FormTitles, PageDisplay, submitbtn, nextbtn} = useContext(FormContext)
  const navigate = useNavigate()

  const location = useLocation()
  const job_id = location.state.jobid

  // useEffect(() => {
    
  // }, [])

  useEffect(() => {
    jobSeeker()

    const one = document.getElementById('one')
    const two = document.getElementById('two')
    const three = document.getElementById('three')
    if (page === 1) {
      one.classList.add('active')
    }
    else if (page == 2) {
      two.classList.add('active')
    }
  }, [])

  // useEffect( () => {
  //   const one = document.getElementById('one')
  //   const two = document.getElementById('two')
  //   const three = document.getElementById('three')

  //   console.log(two)

  //   if (page === 0){
  //     one.classList.add('active')
  //   }
  //   else if (page === 1){
  //     two.classList.add('active')
  //   }
  //   else {
  //     three.classList.add('active')
  //   }
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await fetch(`http://127.0.0.1:8000/jobseekers/job/${job_id}/application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "job_seeker":jobseeker.id, 
        "job": job_id, 
        "credential": 1,
    }),
    });
    console.log(FormData)
  };

  
  

  return (
    <div>
      <NavbarSignedIn />
      <div className="jobapplication-main-container">
        <div className="jobapplication-container">
          <div className="jobapplication-content">
            <h1>Application Form</h1>
            <div className="progress-bars">
              <div className={ page === 0 ? "active" : "bar" } id="one">
                <p className="title">STEP ONE</p>
                <p>Your Personal Information</p>
              </div>
              <div className={page === 1 ? "active" : "bar" } id="two">
                <p className="title">STEP TWO</p>
                <p>Upload your CV</p>
              </div>
              <div className={page === 2  ? "active" : "bar" } id="three">
                <p className="title">STEP THREE</p>
                <p>Employer Questions</p>
              </div>
            </div>
          </div>
          <div className="page-display-container">
          {PageDisplay()} 
          </div>
          
          <form
            className="application-form"
            onSubmit={handleSubmit}
          >
            <div className="appl-button-container">
              <button
                type="button"
                // onClick={back}
                onClick={() => {
                  if (page === 0){
                    navigate("/home")
                  }
                  else {
                    {back()}
                  }
                }}
                // disabled={page == 0}
                id="backbtn"
              >
                Back
              </button>
              <div className="contsub">
              {page === FormTitles.length - 1 ? submitbtn() :  nextbtn()}
              </div>
             
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