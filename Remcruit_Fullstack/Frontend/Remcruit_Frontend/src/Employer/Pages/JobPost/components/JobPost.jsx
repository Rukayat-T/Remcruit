import React, { useContext, useEffect, useState } from 'react'
import '../../../../Jobseeker/Pages/JobApplication/static/JobApplication.css'
import NavbarSignedIn from '../../../../Jobseeker/Components/navbarSignedin/NavbarSignedIn'
import FormContext from '../../../../context/FormContext'
import '../static/JobPost.css'
import BasicInformation from './BasicInformation'
import JobDetails from './JobDetails'
import JobPostQuestions from './JobPostQuestions'
import CommunicationSettings from './CommunicationSettings'
import { useNavigate } from 'react-router'
import CompanyContext from '../../../../context/CompanyContext'

function JobPost() {
    const [tab, setTab] = useState(0)
    let {company, thecompany} = useContext(CompanyContext)
    
    let navigate = useNavigate()

    useEffect(() => {
      thecompany()
    }, [])
    // console.log(company.id)
    const handleSubmit = async (e) => {
      e.preventDefault()
      // console.log()
      let response = await fetch(`http://127.0.0.1:8000/employer/createJob/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postdata),
      });
    };

  const next = () => {
      setTab((currentPage) => currentPage + 1)
    }

  const back = () => {
    setTab((currentPage) => currentPage - 1)
  }

  const JobPostTitles = [
    "Basic Information",
    "Job Details",
    "Communication Settings",
    "Employer Questions",
  ]

    const [postdata, setPostData] = useState({
      title: "",
      vacancy: "",
      location: "",
      job_type: "",
      salary:"",
      pay_rate: "Monthly",
      description:"",
      skills_required:"",
      degree_classification: "",
      is_remote_oppurtunity:"",
      is_cv_required:"",
      is_experience_required:"",
      resumption: "",
      application_deadline: "",
      job_post_duration: "",
      urgency: false,
      is_available:false,
      company:company.id
  })

  const JobPostPageDisplay = () => {
    if (tab === 0) {
      return <BasicInformation postdata={postdata} setPostData={setPostData} />
    }
    else if (tab === 1) {
      return <JobDetails postdata={postdata} setPostData={setPostData} />
    }
    else if (tab === 2) {
      return <CommunicationSettings />
    }
    else {
      return <JobPostQuestions />
    }
  }


    const Submitbtn = () => {
      return (
        <button type="submit" >Submit</button>
      )
    }

  const nextbtn = () => {
    return (
      <button
        type="button"
        onClick={next}
        // disabled={tab === JobPostTitles.length - 1}
        id="continuebtn"
      >Next</button>
    )
  }
  return (
    <div>
      <NavbarSignedIn />
      <div className="job-post-main-container">
        <div className="job-post-content-container">
          <div className="progress-bars job-post">
            <div className={tab === 0 ? "active" : "bar"} id="one">
              <p className="title">STEP ONE</p>
              <p>{JobPostTitles[0]}</p>
            </div>
            <div className={tab === 1 ? "active" : "bar"} id="two">
              <p className="title">STEP TWO</p>
              <p>{JobPostTitles[1]}</p>
            </div>
            <div className={tab === 2 ? "active" : "bar"} id="three">
              <p className="title">STEP THREE</p>
              <p>{JobPostTitles[2]}</p>
            </div>
            <div className={tab === 3 ? "active" : "bar"} id="three">
              <p className="title">STEP FOUR</p>
              <p>{JobPostTitles[3]}</p>
            </div>
          </div>
          <div className="job-post-components">
            {JobPostPageDisplay()}
          </div>

          <form
            className="application-form"
            onSubmit={handleSubmit}
          >
            <div className="appl-button-container post-button-container">
              <button
                type="button"
                // onClick={back}
                onClick={() => {
                  if (tab === 0) {
                    navigate("/home")
                  }
                  else {
                    { back() }
                  }
                }}
                id="backbtn"
              >
                Back
              </button>
              <div className="contsub">
              {tab === JobPostTitles.length - 1 ? <Submitbtn/> :  nextbtn()}
              
              </div>

            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default JobPost
