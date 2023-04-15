import React, { useContext } from 'react'
import './homePageStyles.css'
import JobBox from '../../Components/jobBoxComponent/jobBox'
import Footer from '../../../components/Footer/Footer'
import AuthContext from '../../../context/AuthContext'
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn'
import CompanyBox from '../../Components/companyBox/companyBox'

function HomePage() {
    let { user } = useContext(AuthContext)
    return (
        <div>
            <NavbarSignedIn />
            <div className="pageContent">
                <div className="searchBarContainer">
                    <input type="text" placeholder='search' />
                </div>
                <div className="spotlightSectionContainer">
                    <CompanyBox />
                </div>
                {user && <p>Hello {user.username}</p>}
                homePage
                <JobBox />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage