import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Banner() {
  return (
    <div>
      <div className="main-container">
        <div className="banner-content">
        <h1>Find the right fit.</h1>
        <div className="banner-search-bar">
        <input
            type="text"
            placeholder="Search Jobs, Keywords, Companies       |     Enter Location"
          />
        </div>
        <div className="resume-upload">
        <p> Upload Your Resume - Get noticed by top employers!</p>
        </div>
        </div>
     
      </div>
    </div>
  )
}

export default Banner
