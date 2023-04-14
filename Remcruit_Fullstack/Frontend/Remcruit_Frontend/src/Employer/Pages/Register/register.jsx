import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import wave from '../../../assets/Wave.png'
import "./register.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import AccountInformationTab from './AccountInformationTab'
import YourOrganisationTab from './YourOrganisationTab'
import LogoAndTermsTab from './LogoAndTermsTab'


function EmployerRegister() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  const [page, setPage] = useState(0)

  const nextPage = () => {
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page === 1 || page === 2) {
      setPage(page - 1)
    }
    else {
      goBack()
    }
  }

  const handlePage1 = () => {
    setPage(0)
  }

  const handlePage2 = () => {
    setPage(1)
  }

  const handlePage3 = () => {
    setPage(2)
  }

  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
    title: "",
    gender: "",
    job_title: "",
    organisation_name: "",
    office_address: "",
    organisation_description: "",
    recruitment_agency: "",
    industry: "",
    website: "",
    employees: 0,
    terms_and_conditions: "",
    phone_number: 0
    // country: "",
    // street: "",
    // city: "",
    // state: "",
    // postcode: "",
  })

  useEffect(() => {
    const nextBtn = document.getElementById('next')
    const subBtn = document.getElementById('submit')
    if (page == 2) {
      subBtn.style.display = 'inline-block'
      nextBtn.style.display = 'none'
    }
    else {
      subBtn.style.display = 'none'
      nextBtn.style.display = 'flex'
    }
  })

  const pageDisplay = () => {
    if (page === 0) {
      return <AccountInformationTab formData={formData} setFormData={setFormData} />
    }
    else if (page === 1) {
      return <YourOrganisationTab formData={formData} setFormData={setFormData} />
    }
    else {
      return <LogoAndTermsTab formData={formData} setFormData={setFormData} />
    }
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //let res = await fetch("http://127.0.0.1:8000/api/register/employer/",
      let res = await fetch("http://0.0.0.0:8000/api/register/employer/",
        {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
        });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log(resJson)
        navigate('/employer')
      } else {
        console.log(resJson)
        alert("something went wrong")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="Rcontainer">
        <div>
          <img src={wave} alt="wave" className='wave' />
        </div>
        <div className="formContainer">
          <div className="formBox">
            <div className="cont">
              <div className="nav">
                <div className="backBtn" onClick={prevPage}>
                  <FontAwesomeIcon icon={faChevronLeft} className="backIcon" />
                  back
                </div>
                <div className="nextBtn" onClick={nextPage} id="next">
                  next
                  <FontAwesomeIcon icon={faChevronRight} className="nextIcon" />
                </div>
              </div>
              <div className="tabs">
                <div className='pages'>
                  <div className={page === 0 ? "active" : ""} onClick={handlePage1} id='pageOne'> 1</div>
                  <hr className="line" />
                  <div className={page === 1 ? "active" : ""} onClick={handlePage2} id='pageTwo'>2</div>
                  <hr className="line" />
                  <div className={page === 2 ? "active" : ""} onClick={handlePage3} id='pageThree'>3</div>
                </div>
                <div className='pageNames'>
                  <p className={page === 0 ? "active" : ""} onClick={handlePage1} id='T'>Account Information</p>
                  <p className={page === 1 ? "active" : ""} onClick={handlePage2} id='T'>Your Organisation</p>
                  <p className={page === 2 ? "active" : ""} onClick={handlePage3} id='T'>Logo and Terms</p>
                </div>
                <div className="outlet">
                  <div className="forms">
                    <form onSubmit={handleSubmit}>
                      {pageDisplay()}
                      <input type="submit" value="Register" id="submit" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployerRegister