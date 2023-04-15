import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleUser,
  faFileCircleCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import './Steps.css'

function Steps() {
  return (
    <div>
      <div className="main-container">
        <div className="heading">
          <h1>
            Get hired in <span className="colored">four quick and easy steps</span>
          </h1>
          <p>
            The quick and most effective way to get hired by top firms in your
            area of interest
          </p>
        </div>
        <div className="content-container">
            <div className="all-boxes">
          <div className="boxes">
            <div className="box-content">
            <FontAwesomeIcon
              icon={faCircleUser} size="2x"
              style={{
                color: "#ffcc33",
              }}
            />
            <h2>Create an account</h2>
            <p>
              Sign up for the jobseekers profile, mention your qualifications,
              past work experience to get noticed by employers
            </p>
          </div>
          </div>

          <div className="boxes">
            <FontAwesomeIcon
              icon={faFileCircleCheck} size="2x"
              style={{ color: "#ffcc33" }}
            />
            <h2>Upload CV</h2>
            <p>
              From numerous job openings, shortlist the right match vacancy to
              your profile and apply right after uploading your CV
            </p>
          </div>

          <div className="boxes">
            <FontAwesomeIcon
              icon={faMagnifyingGlass} size="2x"
              style={{ color: "#ffcc33" }}
            />
            <h2>Search Job</h2>
            <p>
              Once you set your job hunting parameters, youll find many openings
              related to your careeer interest on the home page and filter some
              of the best job openings
            </p>
          </div>

          <div className="boxes">
            <FontAwesomeIcon
              icon={faBriefcase} size="2x"
              style={{ color: "#ffcc33" }}
            />
            <h2>Get hired</h2>
            <p>
              After applying, wait for some time, schedule an interview, and if
              everything goes right, then get hired quickly.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
