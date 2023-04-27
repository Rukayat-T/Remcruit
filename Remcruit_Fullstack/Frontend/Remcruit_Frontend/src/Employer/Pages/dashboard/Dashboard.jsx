import React, { useState } from 'react'
import "./dashboardStyles.css"
import NavbarSignedIn from '../navigationSignedIn/navbarHome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars, faBorderAll, faChartSimple, faGripVertical, faBriefcase, faBullseye, faBuilding, faUsers, faBell } from '@fortawesome/free-solid-svg-icons'
import Overview from './Overview'
import MyJobs from './MyJobs'
import Spotlight from './Spotlight'
import MyCompany from './MyCompany'
import Analytics from './Analytics'
import Candidates from '././candidates/Candidates'
import Notifications from './Notifications'

function Dashboard() {

    const [isNavExpanded, setIsNavExpanded] = useState(true)

    const [page, setPage] = useState(0)

    const pageDisplay = () => {
        if (page === 0) {
            return <Overview />
        }
        if (page === 1) {
            return <MyJobs />
        }
        if (page === 2) {
            return <Spotlight />
        }
        if (page === 3) {
            return <MyCompany />
        }
        if (page === 4) {
            return <Analytics />
        }
        if (page === 5) {
            return <Candidates />
        }
        if (page === 6) {
            return <Notifications />
        }
    }

    const CollapseButton = () => {
        if (isNavExpanded) // it is expanded
        {
            return (
                <div className="top1">
                    <button onClick={() => {
                        setIsNavExpanded(!isNavExpanded); //set it to collapse
                        console.log("clicked");
                    }}>
                        <FontAwesomeIcon icon={faXmark} className='xMark' />
                        Collapse
                    </button>
                </div>
            )
        }
        else {
            return (
                <div className="top2">
                    <button onClick={() => {
                        setIsNavExpanded(!isNavExpanded); //set it to not collapse
                        console.log("clicked");
                    }}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            )
        }
    }

    const CollapsedSideNav = () => {
        return (
            <>
                <div className='c-sideNav-container'>
                    <div className="c-head"><CollapseButton /></div>
                    <div className="c-body">
                        <div className={page === 0 ? "ic focusedIcon" : "ic"} onClick={() => { setPage(0) }}>
                            <FontAwesomeIcon icon={faGripVertical} />
                        </div>
                        <div className={page === 1 ? "ic focusedIcon" : "ic"} onClick={() => { setPage(1) }}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className={page === 2 ? "ic focusedIcon" : "ic"} onClick={() => { setPage(2) }}>
                            <FontAwesomeIcon icon={faBullseye} />
                        </div>
                        <div className={page === 3 ? "ic focusedIcon" : "ic"} onClick={() => { setPage(3) }}>
                            <FontAwesomeIcon icon={faBuilding} />
                        </div>
                        <div className={page === 4 ? "ic focusedIcon" : "ic"} onClick={() => { setPage(4) }}>
                            <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                        <div className={page === 5 ? "ic focusedIcon" : "ic"} onClick={() => { setPage(5) }}>
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <div className={page === 6 ? "ic focusedIcon" : "ic"} onClick={() => { setPage(6) }}>
                            <FontAwesomeIcon icon={faBell} />
                        </div>

                    </div>
                </div>
            </>
        )

    }

    const FullSideNav = () => {
        return (
            <>
                <div className='f-sideNav-container'>
                    <div className="f-head"><CollapseButton /></div>
                    <div className="f-body">
                        <div className={page === 0 ? "ic focus" : "ic"} onClick={() => { setPage(0) }}>
                            <FontAwesomeIcon icon={faGripVertical} />
                        </div>
                        <p className={page === 0 ? "pageTitle focus" : "pageTitle"} onClick={() => { setPage(0) }}>Overview</p>


                        <div className={page === 1 ? "ic focus" : "ic"} onClick={() => { setPage(1) }}>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <p className={page === 1 ? "pageTitle focus" : "pageTitle"} onClick={() => { setPage(1) }}>My Jobs</p>


                        <div className={page === 2 ? "ic focus" : "ic"} onClick={() => { setPage(2) }}>
                            <FontAwesomeIcon icon={faBullseye} />
                        </div>
                        <p className={page === 2 ? "pageTitle focus" : "pageTitle"} onClick={() => { setPage(2) }}>Spotlight</p>


                        <div className={page === 3 ? "ic focus" : "ic"} onClick={() => { setPage(3) }}>
                            <FontAwesomeIcon icon={faBuilding} />
                        </div>
                        <p className={page === 3 ? "pageTitle focus" : "pageTitle"} onClick={() => { setPage(3) }}>My company</p>


                        <div className={page === 4 ? "ic focus" : "ic"} onClick={() => { setPage(4) }}>
                            <FontAwesomeIcon icon={faChartSimple} />
                        </div>
                        <p className={page === 4 ? "pageTitle focus" : "pageTitle"} onClick={() => { setPage(4) }}>Analytics</p>


                        <div className={page === 5 ? "ic focus" : "ic"} onClick={() => { setPage(5) }}>
                            <FontAwesomeIcon icon={faUsers} />

                        </div>
                        <p className={page === 5 ? "pageTitle focus" : "pageTitle"} onClick={() => { setPage(5) }}>Candidates</p>

                        <div className={page === 6 ? "ic focus" : "ic"} onClick={() => { setPage(6) }}>
                            <FontAwesomeIcon icon={faBell} />
                        </div>
                        <p className={page === 6 ? "pageTitle focus" : "pageTitle"} onClick={() => { setPage(6) }}>Notifications</p>
                    </div>
                </div>
            </>
        )

    }


    const SideNav = () => {
        if (isNavExpanded) { // it is expanded
            return <FullSideNav />
        }
        else {
            return <CollapsedSideNav />
        }
    }



    return (
        <>
            <NavbarSignedIn />
            <div className="dashboardContainer">
                <div className={isNavExpanded ? "navigation-menu-expanded" : "navigation-menu"}>
                    <SideNav />
                </div>
                <div className="rightDisplay">
                    {pageDisplay()}
                </div>

            </div>
        </>
    )

}



export default Dashboard