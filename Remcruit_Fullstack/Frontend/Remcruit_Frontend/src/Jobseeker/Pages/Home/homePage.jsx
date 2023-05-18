import React, { useContext, useState, useEffect } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './homePageStyles.css'
import JobBox from '../../Components/jobBoxComponent/jobBox'
import Footer from '../../../components/Footer/Footer'
import AuthContext from '../../../context/AuthContext'
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn'
import CompanyBox from '../../Components/companyBox/companyBox'
import Filter from '../../Components/filter/filter'
import UserComponent from '../../Components/user/userComponent'
import NotificationComponent from '../../Components/notification/notificationComponent'
import JobSeekerContext from '../../../context/JobSeekerContext'
import CompanyContext from '../../../context/CompanyContext'

function HomePage() {

    const [jobs, setJobs] = useState([])
    let { jobSeeker, jobseeker } = useContext(JobSeekerContext)
    let { user } = useContext(AuthContext)
    console.log(user)

    const getJobs = async () => {
        const response = await fetch(
            "http://127.0.0.1:8000/employer/AllJobs/"
        ).then((response) => response.json());
        setJobs(response);
    };

    useEffect(() => {
        getJobs();
        jobseeker,
            jobSeeker()
    }, []);

    const [isSearch, setIsSearch] = useState(false)
    const [searchValue, setsearchValue] = useState()
    const [searchResults, setSearchResults] = useState([])

    const searchFunction = async (searchvalue) => {
        const response = await fetch(
            `http://0.0.0.0:8000/jobseekers/searchJob/?search=${searchvalue}`
        ).then((response) => response.json());
        console.log(response)
        setSearchResults(response);
    };

    const handleSearch = (value) => {
        searchFunction(value)
        setsearchValue("")
        setSearchResults([])
    }

    const Display = () => {
        if (isSearch === false) {
            return (
                <>
                    <div className="pageContent">
                        <div className="searchBarContainer" onClick={() => { setIsSearch(true) }}>
                            <button className='locationBtn'>
                                <div className='i'>
                                    <FontAwesomeIcon icon={faLocationDot} className='locationIcon' />
                                    Lagos</div>
                                <p className='vline'>|</p></button>
                            <input type="text" placeholder='search' />
                        </div>
                        <div className="spotlightSectionContainer">
                            <p>Spotlight</p>
                            <div className="companies">
                                <CompanyBox />
                                <CompanyBox />
                                <CompanyBox />
                            </div>
                        </div>
                        <div className="actualContent">
                            <div className="filterContainer">
                                <Filter />
                            </div>
                            <div className="jobFeedContainer">
                                <div className="titleContainer">
                                    <p className='jobFeedContainerp'>Now Hiring</p>
                                </div>
                                <div className="feedContent">
                                    {jobs.length > 0 && (
                                        <div className="feedContent">
                                            {jobs.map(job => (
                                                <JobBox job={job} />
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className="userInfoContainer">
                                <div className="user"><UserComponent /></div>
                                <div className="notifications"><NotificationComponent /></div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="search-page-content">
                        <div className="searchBarContainer-searchPage">
                            <button className='locationBtn'>
                                <div className='i'>
                                    <FontAwesomeIcon icon={faLocationDot} className='locationIcon' />
                                    Lagos</div>
                                <p className='vline'>|</p></button>
                            <input
                                type="text"
                                placeholder='search'
                                value={searchValue}
                                onChange={(e) => { setsearchValue(e.target.value) }} />
                            <button className='search' onClick={() => { handleSearch(searchValue) }}>search</button>
                            <button className='cancelBtn' onClick={() => { setIsSearch(false); setsearchValue(""); setSearchResults([]); }}>cancel</button>
                        </div>
                        <div className='searchResults'>
                            <div className="popup">
                                {searchResults.length > 0 && (
                                    <div className="feedContent">
                                        {searchResults.map(job => (
                                            <JobBox job={job} />
                                        ))}
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                </>
            )
        }
    }

    return (
        <div>
            <NavbarSignedIn />
            {Display()}
            {/* <Footer /> */}
        </div >
    )
}

export default HomePage