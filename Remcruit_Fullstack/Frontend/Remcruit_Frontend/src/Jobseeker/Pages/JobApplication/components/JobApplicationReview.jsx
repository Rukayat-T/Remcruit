import React, { useEffect } from "react";
import NavbarSignedIn from "../../../Components/navbarSignedin/NavbarSignedIn";
import FullJobDescription from "../../Specific Jobs Page/components/FullJobDescription";
import { useLocation } from "react-router";
import "../static/JobApplication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function JobApplicationReview() {
  const [job, setJob] = React.useState({});
  const [toggle, setToggle] = React.useState(false);
  const location = useLocation();
  const gottenJob = location.state.job_id;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `http://127.0.0.1:8000/jobseekers/job/${job_id}/application`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          job_seeker: jobseeker.id,
          job: job_id,
          credential: 1,
        }),
      }
    );
  };
  const openbutton = document.querySelectorAll('.openbutton');

  for (let i = 0; i < openbutton.length; i++) {
    openbutton[i].addEventListener("click", () => {
      setToggle(!toggle);
    });
  }

  // const handleToggle = () => {
  //   if (toggle === false) {
  //   setToggle(true);
  //   } 
  //   if (toggle === true) {
  //     setToggle(false);
  //   }
  // }
  return (
    <div>
      <NavbarSignedIn />
      <div className="review-container">
        <div className="review-content-continer">
          <div className="review-application-container">
            <h1>Review Your Application</h1>
            <div className="all-container-review">
              <div className= {toggle === false ? "review-card" : "review-card show" }>
                <div className= "review-head">
                <h4>Personal Information</h4>
                <FontAwesomeIcon icon={faChevronDown}  className="openbutton"/>
                </div>
                <div className="review-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod veniam numquam eaque perspiciatis nesciunt consectetur labore adipisci omnis quasi, dolore ipsum! Quisquam eaque dignissimos cum. Eligendi nulla, nisi doloribus incidunt nesciunt minus labore illo eaque minima veritatis, ipsum perspiciatis maiores enim nihil unde aperiam. Repudiandae amet reprehenderit id, doloribus asperiores neque, odit odio alias accusantium, ipsam cumque nulla modi ratione accusamus. Tenetur facere facilis corrupti odit labore exercitationem natus impedit repellendus officia ipsa rerum, quia, eaque ab ducimus laborum et asperiores beatae fugit cum, accusantium nostrum quod ratione sunt? Et laudantium autem quo doloremque tempora sit ratione similique amet!
                </div>
              </div>
              <div className={toggle === false ? "review-card" : "review-card show" }>
                <div className="review-head">
                <h4>CV</h4>
                <FontAwesomeIcon icon={faChevronDown}  className="openbutton"/>
                </div>
                <div className="review-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod veniam numquam eaque perspiciatis nesciunt consectetur labore adipisci omnis quasi, dolore ipsum! Quisquam eaque dignissimos cum. Eligendi nulla, nisi doloribus incidunt nesciunt minus labore illo eaque minima veritatis, ipsum perspiciatis maiores enim nihil unde aperiam. Repudiandae amet reprehenderit id, doloribus asperiores neque, odit odio alias accusantium, ipsam cumque nulla modi ratione accusamus. Tenetur facere facilis corrupti odit labore exercitationem natus impedit repellendus officia ipsa rerum, quia, eaque ab ducimus laborum et asperiores beatae fugit cum, accusantium nostrum quod ratione sunt? Et laudantium autem quo doloremque tempora sit ratione similique amet!
                </div>
              </div>
              <div className={toggle === false ? "review-card" : "review-card show" }>
                <div className="review-head">
                <h4>Your Answers</h4>
                <FontAwesomeIcon icon={faChevronDown}   className="openbutton"/>
                </div>
                <div className="review-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod veniam numquam eaque perspiciatis nesciunt consectetur labore adipisci omnis quasi, dolore ipsum! Quisquam eaque dignissimos cum. Eligendi nulla, nisi doloribus incidunt nesciunt minus labore illo eaque minima veritatis, ipsum perspiciatis maiores enim nihil unde aperiam. Repudiandae amet reprehenderit id, doloribus asperiores neque, odit odio alias accusantium, ipsam cumque nulla modi ratione accusamus. Tenetur facere facilis corrupti odit labore exercitationem natus impedit repellendus officia ipsa rerum, quia, eaque ab ducimus laborum et asperiores beatae fugit cum, accusantium nostrum quod ratione sunt? Et laudantium autem quo doloremque tempora sit ratione similique amet!
                </div>
              </div>
              <div className={toggle === false ? "review-card" : "review-card show" }>
                <div className="review-head">
                <h4>Supporting Documents</h4>
                <FontAwesomeIcon icon={faChevronDown} className="openbutton"/>
                </div>
                <div className="review-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quod veniam numquam eaque perspiciatis nesciunt consectetur labore adipisci omnis quasi, dolore ipsum! Quisquam eaque dignissimos cum. Eligendi nulla, nisi doloribus incidunt nesciunt minus labore illo eaque minima veritatis, ipsum perspiciatis maiores enim nihil unde aperiam. Repudiandae amet reprehenderit id, doloribus asperiores neque, odit odio alias accusantium, ipsam cumque nulla modi ratione accusamus. Tenetur facere facilis corrupti odit labore exercitationem natus impedit repellendus officia ipsa rerum, quia, eaque ab ducimus laborum et asperiores beatae fugit cum, accusantium nostrum quod ratione sunt? Et laudantium autem quo doloremque tempora sit ratione similique amet!
                </div>
              </div>
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
