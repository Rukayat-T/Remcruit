import React, { useContext, useEffect, useState } from 'react'
import '../../../../Jobseeker/Pages/JobApplication/static/JobApplication.css'
import NavbarSignedIn from '../../../../Jobseeker/Components/navbarSignedin/NavbarSignedIn'
import FormContext from '../../../../context/FormContext'
import '../static/JobPost.css'
import BasicInformation from './BasicInformation'
import JobDetails from './JobDetails'
import JobPostQuestions from './JobPostQuestions'
import CommunicationSettings from './CommunicationSettings'
import { useLocation, useNavigate } from 'react-router'
import CompanyContext from '../../../../context/CompanyContext'
import JobPostSummary from '../../jobPostSummary/JobPostSummary'

function JobPost() {
  const [tab, setTab] = useState(0)
  let { company, thecompany } = useContext(CompanyContext)

  let navigate = useNavigate()

  // const location = useLocation()
  // location.state = postdata
  // console.log(location)




  const [postdata, setPostData] = useState({
    title: localStorage.getItem('title') || "",
    open_spots: localStorage.getItem('vacancy') || "",
    location: localStorage.getItem('location') || "",
    job_type: localStorage.getItem('job_type') || "",
    salary: localStorage.getItem('salary') || "",
    pay_rate: localStorage.getItem('pay_rate') || "Monthly",
    description: localStorage.getItem('description') || "",
    skills_required: localStorage.getItem('skills_required') || "",
    degree_classification: localStorage.getItem('degree_classification') || "",
    is_remote_oppurtunity: localStorage.getItem('is_remote_opportunity') || "",
    is_cv_required: localStorage.getItem('is_cv_required') || "",
    is_experience_required: localStorage.getItem('is_experience_required') || "",
    resumption: localStorage.getItem('resumption') || "",
    application_deadline: localStorage.getItem('application_deadline') || "",
    job_post_duration: localStorage.getItem('job_post_duration') || "",
    urgency: false,
    is_available: false,
    company: company?.id
  })

  useEffect(() => {
    thecompany()
  }, [])
  // console.log(company.id)
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   // console.log()
  //   let response = await fetch(`http://127.0.0.1:8000/employer/createJob/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(postdata),
  //   });
  // };



  const next = () => {
    //setTab((currentPage) => currentPage + 1)
    // localStorage.setItem("postData", JSON.stringify(postdata))
    localStorage.setItem('title', postdata.title)
    localStorage.setItem('vacancy', postdata.open_spots)
    localStorage.setItem('location', postdata.location)
    localStorage.setItem('job_type', postdata.job_type)
    localStorage.setItem('salary', postdata.salary)
    localStorage.setItem('pay_rate', postdata.pay_rate)
    localStorage.setItem('description', postdata.description)
    localStorage.setItem('skills_required', postdata.skills_required)
    localStorage.setItem('degree_classification', postdata.degree_classification)
    localStorage.setItem('is_remote_opportunity', postdata.is_remote_oppurtunity)
    localStorage.setItem('is_cv_required', postdata.is_cv_required)
    localStorage.setItem('is_experience_required', postdata.is_experience_required)
    localStorage.setItem('resumption', postdata.resumption)
    localStorage.setItem('application_deadline', postdata.application_deadline)
    localStorage.setItem('urgency', postdata.urgency)
    localStorage.setItem('is_available', postdata.is_available)
    localStorage.setItem('company', postdata.company)

    if (tab !== 3) {
      setTab((currentPage) => currentPage + 1)
    }
    else if (tab === 3) {
      navigate("/employer/job/post/summary", {
        state: {
          postdata: postdata
        }
      })
    }
  }

  const back = () => {
    setTab((currentPage) => currentPage - 1)
  }

  const JobPostTitles = [
    "Basic Information",
    "Job Details",
    "Communication Settings",
    "Employer Questions",
    "Summary",
  ]



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
    else if (tab === 3) {
      return <JobPostQuestions />
    }
    else {
      return <JobPostSummary postdata={postdata} setPostData={setPostData} />
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
          // onSubmit={handleSubmit}
          >
            <div className="appl-button-container post-button-container">
              <button
                type="button"
                // onClick={back}
                onClick={() => {
                  if (tab === 0) {
                    navigate("/dashboard")
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
                {nextbtn()}

              </div>

            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default JobPost
