import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import AuthContext from "../../../context/AuthContext";
import JobSeekerContext from "../../../context/JobSeekerContext";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import {
  faArrowLeft,
  faImage,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faker } from "@faker-js/faker";
import NavbarSignedIn from "../../Components/navbarSignedin/NavbarSignedIn";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";
import fileDownload from "js-file-download";

function Profile() {
  let { user } = useContext(AuthContext);
  let { jobseeker, jobSeeker } = useContext(JobSeekerContext);
  let { getJobSeeker } = useContext(AuthContext);
  const [choices, setChoices] = useState([]);
  const [editProfile, setEditProfile] = useState(false);
  const [image, setImage] = useState([]);
  const [fileLink, setFileLink] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState("");

  const docs = [
    {
      uri: fileLink,
      fileType: "pdf"
    },
  ];

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    acceptedFiles: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((upFile) =>
          Object.assign(upFile, {
            preview: URL.createObjectURL(upFile),
          })
        )
      );
    },
  });

  useEffect(() => {
    jobSeeker();
    jobseeker;
    choices;
    setChoices;
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/jobseekers/choices/`)
      .then((response) => response.json())
      .then((data) => setChoices(data))
      .catch((error) => console.log(error));
  }, []);

  const jobseekerID = jobseeker?.id;

  useEffect(() => {
    const fetchCredential = async () => {
      const url = `http://127.0.0.1:8000/jobseekers/credential/byjobseeker/${jobseekerID}/`;
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const data = await response.json();
        setFileLink(data[0].credential);
        setFileName(data[0].credential_name);
        setFileData(data[0]);
        // fileDownload(data[0].credential, fileName)
      } catch (error) {
        console.log(error);
      }
    };
    if (jobseekerID) {
      fetchCredential();
    }
  }, [jobseekerID]);
  

  let uni = choices?.university_choices;
  let year = choices?.year_choices;
  let degree = choices?.degree_choices;
  let gender = choices?.gender_choices;
  let role = choices?.role_choices;
  let industry = choices?.industry_choices;
  let subject = choices?.subject_choices;
  let qualification = choices?.qualification_choices;

  const [profileData, setProfileData] = useState({
    email: user.username,
    phone_number: jobseeker?.phone_number,
    first_name: user.first_name,
    professional_summary: jobseeker?.professional_summary,
    last_name: user.last_name,
    gender: jobseeker?.gender,
    university_name: jobseeker?.university_name,
    role_type: jobseeker?.role_type,
    year_of_graduation: jobseeker?.year_of_graduation,
    degree_classification: jobseeker?.degree_classification,
    industry: jobseeker?.industry,
    subject_of_study: jobseeker?.subject_of_study,
    highest_qualification: jobseeker?.highest_qualification,
    credential: fileData,
  });
  console.log();

  const navigate = useNavigate();
  const back = () => {
    navigate("/home");
  };
  const updateProfile = async (jobseekerId) => {
    try {
      var data = new FormData();
      data.append("profile_picture", image[0]);
      data.append("email", profileData.email);
      data.append("phone_number", profileData?.phone_number);
      data.append("first_name", profileData.first_name);
      data.append("professional_summary", profileData?.professional_summary);
      data.append("last_name", profileData.last_name);
      data.append("gender", profileData?.gender);
      data.append("university_name", profileData?.university_name);
      data.append("role_type", profileData?.role_type);
      data.append("year_of_graduation", profileData?.year_of_graduation);
      data.append("degree_classification", profileData?.degree_classification);
      data.append("industry", profileData?.industry);
      data.append("subject_of_study", profileData?.subject_of_study);
      data.append("highest_qualification", profileData?.highest_qualification);
      data.append("credential", profileData?.credential);
      // data.append('credential_name', profileData?.credential_name)

      let response = await fetch(
        `http://127.0.0.1:8000/jobseekers/profile/${jobseekerId}/`,
        {
          method: "PUT",
          body: data,
        }
      ).then((response) => response.json());
      setEditProfile(false);
      getJobSeeker(user.id);
      setEditProfile(false);
    } catch (error) {
      console.log(error);
    }
  };

  const randomImage = faker.image.city();
  const randomAvatar = faker.image.avatar();

  const genderDefaultValue = jobseeker?.gender;
  const uniDefaultValue = jobseeker?.university_name;
  const roleDefualtValue = jobseeker?.role_type;
  const yearDefaultValue = jobseeker?.year_of_graduation;
  const degreeDefualtValue = jobseeker?.degree_classification;
  const industryDefaultValue = jobseeker?.industry;
  const courseDefaultValue = jobseeker?.subject_of_study;
  const qualificationDefaultValue = jobseeker?.highest_qualification;

  const defaultValue = "String";

  return (
    <div>
      {/* <NavbarSignedIn/> */}
      <div className="profile-main-container">
        <div className="profile-header">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "#000000" }}
            onClick={back}
          />
          <img
            src={jobseeker?.profile_picture}
            alt=""
          />
          <h1>Hi, {user.first_name}</h1>
        </div>
        <div className="hori">
          <hr />
        </div>
        <div className="profile-main-content">
          <div className="profile-content">
            <div className="profile columnone">
              <div className="profile-image">
                <h3>PROFILE IMAGE</h3>
                {editProfile ? (
                  <div className=""></div>
                ) : (
                  <img
                    src={jobseeker?.profile_picture}
                    alt=""
                  />
                )}
                {editProfile ? (
                  <>
                    <div
                      {...getRootProps()}
                      disabled={editProfile ? false : true}
                      className="change-image"
                    >
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <p>Drag and Drop your Image Here..</p>
                      ) : (
                        <div className="clickanddrop">
                          <FontAwesomeIcon
                            icon={faImage}
                            style={{ color: "#CA61C3" }}
                            className="fa-2x"
                          />
                          <p>Drag and Drop / Click to Upload</p>
                        </div>
                      )}
                    </div>
                    <div>
                      {image.map((upFile) => {
                        return (
                          <img
                            src={upFile.preview}
                            alt="preview"
                            className="image-profile"
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="personal-details">
                <h3>PERSONAL DETAILS</h3>
                <div className="profile-input">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    value={
                      editProfile === false
                        ? user.first_name
                        : profileData.first_name
                    }
                    id="first_name"
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        first_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    value={
                      editProfile === false
                        ? user.last_name
                        : profileData.last_name
                    }
                    id="last_name"
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        last_name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name=""
                    id="gender"
                    value={
                      editProfile === false
                        ? genderDefaultValue
                        : profileData.gender
                    }
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({ ...profileData, gender: e.target.value })
                    }
                  >
                    {gender?.map((choice) => (
                      <option
                        key={choice[0]}
                        value={choice[1]}
                      >
                        {choice[1]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="profile-input">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    value={
                      editProfile === false ? user.username : profileData.email
                    }
                    id="email"
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    value={
                      editProfile === false
                        ? jobseeker?.phone_number
                        : profileData.phone_number
                    }
                    id="phone"
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        phone_number: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="profile columntwo">
              <div className="professional-summary">
                <h3>PROFESSIONAL SUMMARY</h3>
                <p>{jobseeker?.professional_summary}</p>
              </div>
              <div className="career-pref">
                <h3>CAREER PREFERENCES</h3>
                <div className="profile-input">
                  <label htmlFor="role">Role Type</label>
                  <select
                    name=""
                    id="role"
                    disabled={editProfile ? false : true}
                    value={
                      editProfile === false
                        ? roleDefualtValue
                        : profileData.role_type
                    }
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        role_type: e.target.value,
                      })
                    }
                  >
                    {role?.map((choice) => (
                      <option
                        key={choice[0]}
                        value={choice[0]}
                      >
                        {choice[1]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="profile-input">
                  <label htmlFor="industry">Industry Sector</label>
                  <select
                    name=""
                    id="industry"
                    value={
                      editProfile === false
                        ? industryDefaultValue
                        : profileData.industry
                    }
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        industry: e.target.value,
                      })
                    }
                  >
                    {industry?.map((choice) => (
                      <option
                        key={choice[0]}
                        value={choice[0]}
                      >
                        {choice[1]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="study-deets">
                <h3>STUDY DETAILS</h3>
                <div className="profile-input">
                  <label htmlFor="university">University</label>
                  <select
                    name=""
                    id="university"
                    value={
                      editProfile === false
                        ? uniDefaultValue
                        : profileData.university_name
                    }
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        university_name: e.target.value,
                      })
                    }
                  >
                    {uni?.map((choice) => (
                      <option
                        key={choice[0]}
                        value={choice[0]}
                      >
                        {choice[0]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="profile-input">
                  <label htmlFor="course">Subject of Study</label>
                  <select
                    name=""
                    id="course"
                    value={
                      editProfile === false
                        ? courseDefaultValue
                        : profileData.subject_of_study
                    }
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        subject_of_study: e.target.value,
                      })
                    }
                  >
                    {subject?.map((choice) => (
                      <option
                        key={choice[0]}
                        value={choice[0]}
                      >
                        {choice[1]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="profile-input">
                  <label htmlFor="qualification">Highest Qualification</label>
                  <select
                    name=""
                    id="qualification"
                    value={
                      editProfile === false
                        ? qualificationDefaultValue
                        : profileData.highest_qualification
                    }
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        highest_qualification: e.target.value,
                      })
                    }
                  >
                    {qualification?.map((choice) => (
                      <option
                        key={choice[0]}
                        value={choice[0]}
                      >
                        {choice[1]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="profile-input">
                  <label htmlFor="degree">Degree Classification</label>
                  <select
                    name=""
                    id="degree"
                    value={
                      editProfile === false
                        ? degreeDefualtValue
                        : profileData.degree_classification
                    }
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        degree_classification: e.target.value,
                      })
                    }
                  >
                    {degree?.map((choice) => (
                      <option
                        key={choice[0]}
                        value={choice[0]}
                      >
                        {choice[0]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="profile-input">
                  <label htmlFor="year">Year of graduation</label>
                  <select
                    name=""
                    id="year"
                    value={
                      editProfile === false
                        ? yearDefaultValue
                        : profileData.year_of_graduation
                    }
                    disabled={editProfile ? false : true}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        year_of_graduation: e.target.value,
                      })
                    }
                  >
                    {year?.map((choice) => (
                      <option
                        key={choice[0]}
                        value={choice[1]}
                      >
                        {choice[1]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="profile columnthree">
              <div className="experiences">
                <h3>EXPERIENCE</h3>
                <div className="profile-input">
                  <label htmlFor="first_name">Employer</label>
                  <input
                    type="text"
                    id="first_name"
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="first_name">Role</label>
                  <input
                    type="text"
                    id="first_name"
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="first_name">Summary</label>
                  <input
                    type="text"
                    id="first_name"
                  />
                </div>
                <div className="profile-input">
                  <label htmlFor="first_name">Duration</label>
                  <input
                    type="text"
                    id="first_name"
                  />
                </div>
                <div className="add-button">
                  <button>
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ color: "#ffffff" }}
                    />
                    Add
                  </button>
                </div>
              </div>
              <div className="uploads">
                <h3>CV UPLOAD</h3>
                <div className="profile-input">
                  {editProfile === true ? (
                    <div className="">
                      <input
                        type="file"
                        id="first_name"
                        accept=".pdf,.docx,.doc,.rtf,.txt"
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            credential: e.target.files[0],
                          })
                        }
                      />
                      <p>Max file: 30MB</p>
                      <p>Allowed file types: pdf, docx, doc, rtf, txt</p>
                    </div>
                  ) : (
                    <div className="">
                      {/* <p>{fileData.credential_name}</p> */}
                      {/* <a href={fileData}><button>View CV</button></a> */}
                      <DocViewer
                        pluginRenderers={DocViewerRenderers}
                        documents={docs}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="profile-button">
            {editProfile === false ? (
              <button
                type="button"
                onClick={() => {
                  setEditProfile(true);
                }}
              >
                Edit
              </button>
            ) : (
              <div className="subcan">
                <button
                  type="button"
                  onClick={() => {
                    updateProfile(jobseeker?.id);
                  }}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="cancelbutton"
                  onClick={() => {
                    setEditProfile(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
