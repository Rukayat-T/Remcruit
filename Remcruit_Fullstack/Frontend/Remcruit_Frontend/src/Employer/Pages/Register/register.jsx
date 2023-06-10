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

  const [company_logo, setCompany_logo] = useState([])

  const setLogo = (image) => {
    setCompany_logo(image)
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
    city: "",
    state: "",
    office_address: "",
    organisation_description: "",
    recruitment_agency: "",
    industry: "",
    website: "",
    employees: 0,
    terms_and_conditions: "",
    phone_number: 0,
    company_logo: company_logo[0]
  })
  console.log(formData)

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
      return <LogoAndTermsTab formData={formData} setFormData={setFormData} setLogo={setLogo} />
    }
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var data = new FormData();
      data.append("company_logo", company_logo[0]);
      data.append("email", formData.email)
      data.append("first_name", formData.first_name)
      data.append("last_name", formData.last_name)
      data.append("password", formData.password)
      data.append("password2", formData.password2)
      data.append("title", formData.title)
      data.append("gender", formData.gender)
      data.append('city', formData.city)
      data.append('state', formData.state)
      data.append("job_title", formData.job_title)
      data.append("organisation_name", formData.organisation_name)
      data.append("office_address", formData.office_address)
      data.append("organisation_description", formData.organisation_description)
      data.append("recruitment_agency", formData.recruitment_agency)
      data.append("industry", formData.industry)
      data.append("website", formData.website)
      data.append("employees", formData.employees)
      data.append("terms_and_conditions", formData.terms_and_conditions)
      data.append("phone_number", formData.phone_number)

      let res = await fetch("http://127.0.0.1:8000/authentication/register/employer/",
        // let res = await fetch("http://0.0.0.0:8000/authentication/register/employer/",
        {
          method: "POST",
          body: form,
        });
      let resJson = await res.json();
      if (res.status === 201) {
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