import React from 'react'

function About({ company }) {
    console.log(company)
    return (
        <>
            <div className="about-header-container">
                <p className="about-head-text"> About {company?.organisation_name}</p>
                <p className="about-head-body"> {company?.organisation_description}</p>
            </div>
        </>
    )
}

export default About