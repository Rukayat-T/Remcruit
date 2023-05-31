import React, { useState } from 'react'
import "./specificCompany.css"
import { useLocation } from 'react-router'
import Navbar from '../../../components/Navbar/Navbar'
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn'
import About from './About'
import JobsAndOpportunities from './JobsAndOpportunities'
import Advice from './Advice'

function SpecificCompanyPage() {

    const location = useLocation()
    const [company, setCompany] = useState(location.state.company)
    const [page, setPage] = useState(0)

    const PageDisplay = () => {
        if (page === 0) {
            return (<About company={company} />)
        }
        else if (page === 1) {
            return (<JobsAndOpportunities company={company} />)
        }
        else {
            return (<Advice company={company} />)
        }

    }

    return (
        <>
            <NavbarSignedIn />
            <div className="specific-company-page-container">
                <div className="specific-company-page-header">
                    <img className='company_banner' src={company?.company_banner} alt="" />
                    <div className="specific-company-logo">
                        <img src={company?.company_logo} alt="" />
                    </div>
                    <div className="company-name">
                        {company?.organisation_name}
                    </div>
                </div>
                <div className="specific-company-page-navigation">
                    <ul>
                        <li> <p onClick={() => { setPage(0) }} className={page === 0 ? "activeTab" : "tab"}>About</p> </li>
                        <li> <p onClick={() => { setPage(1) }} className={page === 1 ? "activeTab" : "tab"}>Jobs & Opportunities</p> </li>
                        <li> <p onClick={() => { setPage(2) }} className={page === 2 ? "activeTab" : "tab"}>Advice</p> </li>
                    </ul>
                </div>
                <div className="specific-company-page-body">
                    <div className="body-container">
                        {PageDisplay()}
                    </div>
                </div>

            </div>
        </>

    )
}

export default SpecificCompanyPage