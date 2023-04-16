import React, { useContext, useState, useEffect } from 'react'
import './homePageStyles.css'
import JobBox from '../../Components/jobBoxComponent/jobBox'
import Footer from '../../../components/Footer/Footer'
import AuthContext from '../../../context/AuthContext'
import NavbarSignedIn from '../../Components/navbarSignedin/NavbarSignedIn'
import CompanyBox from '../../Components/companyBox/companyBox'
import Filter from '../../Components/filter/filter'
import UserComponent from '../../Components/user/userComponent'
import NotificationComponent from '../../Components/notification/notificationComponent'

function HomePage() {
    let { user } = useContext(AuthContext)

    const [jobs, setJobs] = useState([])


    const getJobs = async () => {
        const response = await fetch(
            "http://0.0.0.0:8000/employer/Jobs/"
        ).then((response) => response.json());
        // console.log(response)

        // update the state
        setJobs(response);
        console.log(response)
    };

    useEffect(() => {
        getJobs();
    }, []);

    return (
        <div>
            <NavbarSignedIn />
            <div className="pageContent">
                {user && <p>Hello {user.username}</p>}
                <div className="searchBarContainer">
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
            <Footer />
        </div>
    )
}

export default HomePage