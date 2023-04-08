import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import wave from '../../../assets/Wave.png'
import "./register.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import AccountInformationTab from './AccountInformationTab'
import YourOrganisationTab from './YourOrganisationTab'
import LogoAndTermsTab from './LogoAndTermsTab'
// import { element } from 'prop-types'


function register() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const prev = () => {
    if (activeTab === 'tab2') {
      setActiveTab("tab1");
    }
    else if (activeTab === 'tab3') {
      setActiveTab("tab2");
    }
    else {
      goBack()
    }
  }

  const next = () => {
    if (activeTab === 'tab1') {
      setActiveTab("tab2");
    }
    else if (activeTab === 'tab2') {
      setActiveTab("tab3");
    }
  }
  const buttonNext = document.getElementById('bt')
  console.log(buttonNext)

  if (activeTab === 'tab3') {
    buttonNext.style.display = 'none'
  }
  else {
    buttonNext.style.display = 'flex'
  }


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
                <div className="backBtn" onClick={prev}>
                  <FontAwesomeIcon icon={faChevronLeft} className="backIcon" />
                  back
                </div>
                <div className="nextBtn" onClick={next} id="bt">
                  next
                  <FontAwesomeIcon icon={faChevronRight} className="nextIcon" />
                </div>
              </div>
              <div className="tabs">
                <div className='pages'>
                  <div className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1} id='pageOne'> 1</div>
                  <hr className="line" />
                  <div className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2} id='pageTwo'>2</div>
                  <hr className="line" />
                  <div className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3} id='pageThree'>3</div>
                </div>
                <div className='pageNames'>
                  <p className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Account Information</p>
                  <p className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Your Organisation</p>
                  <p className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>Logo and Terms</p>
                </div>
                <div className="outlet">
                  <div className="forms">
                    <form>
                      {activeTab === "tab1" ? <AccountInformationTab /> : activeTab === "tab2" ? <YourOrganisationTab /> : <LogoAndTermsTab />}
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

export default register