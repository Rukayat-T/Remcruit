import React, { useContext, useEffect, useState } from "react";
import NavbarSignedIn from "../../../Components/navbarSignedin/NavbarSignedIn";
import FullJobDescription from "../../Specific Jobs Page/components/FullJobDescription";
import { useLocation, useNavigate } from "react-router";
import "../static/JobApplication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../context/AuthContext";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

function JobApplicationReview() {
  const [job, setJob] = React.useState({});
  let { jobseeker, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const gottenJob = location.state.job_id;
  const jobseekerData = location.state.jobseekerData;
  const [accordionActive, setAccordionActive] = useState(null);

  const handleAccordionClick = (index) => {
    if (index === accordionActive) {
      setAccordionActive(null);
    } else {
      setAccordionActive(index);
    }
  };

  const back = () => {
    navigate(-1);
  };

  

  const fetchjobs = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/employer/job/${id}`
      ).then((response) => response.json());
      setJob(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchjobs(gottenJob);
  }, []);

  const handleSubmit = async () => {
    try{
      let data = new FormData();
      data.append("job", gottenJob);
      data.append('job_seeker', jobseeker.id)
      data.append('status', 'In Review')
      data.append('credential', jobseekerData.credential)
      data.append('credential_name', jobseekerData.credential.name)
      
      let response = await fetch(
        `http://127.0.0.1:8000/jobseekers/job/${gottenJob}/application`,
        {
          method: "POST",
          body: data,
        }
      );
     
    }
    catch(err){
      console.log(err);
    }
    
  };
  const submitbtn = () => {
    return (
      <button
        type="submit"
        onClick={() => {
          handleSubmit();
          // navigate("/home")
        }}
      >
        Submit
      </button>
    );
  };

  return (
    <div>
      <NavbarSignedIn />
      <div className="review-container">
        <div className="review-content-continer">
          <div className="review-application-container">
            <h1>Review Your Application</h1>
            <div className="all-container-review">
              <div className="review-card">
                <div
                  className="review-head"
                  onClick={() => handleAccordionClick(0)}
                >
                  <h4>Personal Information</h4>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`openbutton ${
                      accordionActive === 0 ? "displayed" : ""
                    }`}
                  />
                </div>
                
                <div
                  className={`review-body ${
                    accordionActive === 0 ? "displayed" : ""
                  }`}
                >
                  <hr />
                  <div className="review-body-content">
                  
                  <div className="">
                  <h4>First Name</h4>
                  <p>{jobseekerData.first_name}</p>
                  <h4>Last Name</h4>
                  <p>{jobseekerData.last_name}</p>
                  <h4>Email Address</h4>
                  <p>{jobseekerData.email}</p>
                  
                  </div>
                  <div className="">
                  <h4>Phone Number</h4>
                  <p>{jobseekerData.phone_number}</p>
                    <h4>NIN</h4>
                    <p>{jobseekerData.nin}</p>
                    <h4>State</h4>
                    <p>{jobseekerData.state}</p>
                  </div>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div
                  className="review-head"
                  onClick={() => handleAccordionClick(1)}
                >
                  <h4>CV</h4>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`openbutton ${
                      accordionActive === 1 ? "displayed" : ""
                    }`}
                  />
                </div>
                <div
                  className={`review-body poppp ${
                    accordionActive === 1 ? "displayed" : ""
                  }`}
                >
                  <hr />
                  <div className="credential-box">
                    <div className="credential-icon">
                      <FontAwesomeIcon
                        icon={faFileLines}
                        style={{ color: "#CA61C3", fontSize: "1.3rem" }}
                      />
                    </div>
                    <p>{jobseekerData.credential.name}</p>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div
                  className="review-head"
                  onClick={() => handleAccordionClick(2)}
                >
                  <h4>Your Answers</h4>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`openbutton ${
                      accordionActive === 2 ? "displayed" : ""
                    }`}
                  />
                </div>
                <div
                  className={`review-body ${
                    accordionActive === 2 ? "displayed" : ""
                  }`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quos, unde?
                </div>
              </div>
              <div className="review-card">
                <div
                  className="review-head"
                  onClick={() => handleAccordionClick(3)}
                >
                  <h4>Supporting Documents</h4>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`openbutton ${
                      accordionActive === 3 ? "displayed" : ""
                    }`}
                  />
                </div>
                <div
                  className={`review-body ${
                    accordionActive === 3 ? "displayed" : ""
                  }`}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt eius perspiciatis unde blanditiis fuga, incidunt
                  quaerat ad reprehenderit eaque odio!
                </div>
              </div>
            </div>
            <div className="appl-button-container">
              <button
                type="button"
                // onClick={back}
                onClick={() => {
                  back();
                }}
                // disabled={page == 0}
                id="backbtn"
              >
                Back
              </button>
              <div className="contsub">{submitbtn()}</div>
            </div>
          </div>
          <div className="job-description-full-container">
            <FullJobDescription specificjob={job} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationReview;
