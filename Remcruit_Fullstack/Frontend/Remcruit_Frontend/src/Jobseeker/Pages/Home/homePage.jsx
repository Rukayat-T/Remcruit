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
import JobSeekerContext from '../../../context/JobSeekerContext'
import CompanyContext from '../../../context/CompanyContext'
import UserComp from '../../Components/UserComponent/UserComponent'

function HomePage() {

    const [jobs, setJobs] = useState([])
    const [companies, setCompanies] = useState([])
    let { jobSeeker, jobseeker } = useContext(JobSeekerContext)
    let { user } = useContext(AuthContext)
    const getJobs = async () => {
        const response = await fetch(
            "http://127.0.0.1:8000/employer/AllJobs/"
        ).then((response) => response.json());
        setJobs(response);
    };

    const profile_pic = jobseeker?.profile_picture

    const getCompanies = async () => {
        const response = await fetch(
            " http://127.0.0.1:8000/employer/allEmployers/"
        ).then((response) => response.json());
        setCompanies(response);
    }

    useEffect(() => {
        getJobs();
        getCompanies();
        jobseeker,
            jobSeeker();
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
    }

    const Buttons = () => {
        if (isSearch == true) {
            return (
                <>
                    <button className='search' onClick={() => { handleSearch(searchValue) }}>Search</button>
                    <button className='cancelBtn' onClick={() => { setIsSearch(false); setsearchValue(""); setSearchResults([]); }}>Cancel</button>
                </>
            )
        }
    }

    const Display = () => {
        if (isSearch === false) {
            return (
                <>
                    <div className="feedContent">
                        {jobs.length > 0 && (
                            <div className="feedContent">
                                {jobs.map(job => (
                                    <JobBox job={job} />
                                ))}
                            </div>
                        )}
                    </div>

                </>
            )
        }
        else {
            return (
                <>
                    <div className="feedContent">
                        {searchResults.length > 0 && (
                            <div className="search-feed-content">
                                {searchResults.map(job => (
                                    <div key={job?.id}>
                                        <JobBox job={job} />
                                    </div>
                                    
                                ))}
                            </div>
                        )}
                    </div>
                </>
            )
        }
    }

    return (
        <div>
            {/* <NavbarSignedIn profile_pic={profile_pic} /> */}
            <div className="pageContent">
                <div className="searchBarContainer" >
                    <button className='locationBtn'>
                        <div className='i'>
                            <FontAwesomeIcon icon={faLocationDot} className='locationIcon' />
                            Lagos</div>
                        <p className='vline'>|</p></button>
                    <input
                        onClick={() => { setIsSearch(true) }}
                        type="text"
                        placeholder='search'
                        value={searchValue}
                        onChange={(e) => { setsearchValue(e.target.value) }} />{Buttons()}
                </div>
                <div className="actualContent">
                    <div className="filterContainer">
                        <Filter />
                    </div>
                    <div className="jobFeedContainer">
                        <div className="titleContainer">
                            <p className='jobFeedContainerp'>Now Hiring</p>
                        </div>
                        {Display()}
                    </div>
                    <div className="userInfoContainer">
                        <div className="user"> <UserComp  profile_pic={profile_pic}/></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}








export default HomePage