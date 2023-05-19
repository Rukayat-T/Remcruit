import React, { useContext, useEffect, useState } from 'react'
import './candidatesStyles.css'
import ToReviewPage from './ToReviewPage'
import ToInterviewPage from './ToInterviewPage'
import SentOffersPage from './SentOffersPage'
import DeclinedPage from './DeclinedPage'
import AuthContext from '../../../../context/AuthContext'

function Candidates({ JobFromMyJobs }) {
    let { company, jobsByCompany } = useContext(AuthContext)

    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const [chosenJobUpdate, setChosenJobUpdate] = useState(false)

    const setNewChosenJob = (value) => {
        if (value) {
            setChosenJobUpdate(value)
            // console.log(value)
        }
    }
    // console.log(chosenJobUpdate)

    const [jobsByCompanyId, setJobsByCompanyId] = useState([])
    const [candidatesByJobId, setCandidatesByJobId] = useState([])


    const [selectedJob, setSelectedJob] = useState(JobFromMyJobs.id)
    const chooseAJob = "Choose A Job"

    const getJobsByCompanyId = async (id) => {
        try {
            // setIsLoading(true)
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getJobByCompanyId/${id}/`
            )
                .then((response) => response.json());
            // console.log(response)
            // setIsLoading(false)
            setJobsByCompanyId(response)
        }
        catch (error) {
            // setIsLoading(true)
            console.log(error)
        }
    }
    const getCandidatesByJobId = async (id) => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getCandidatesByJobId/${id}`
            )
                .then((response) => response.json());
            //console.log(response)
            setCandidatesByJobId(response)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJobsByCompanyId(company?.id)
    }, [company?.id])

    const pageDisplay = () => {
        if (page === 0) {
            return <ToReviewPage selectedJob={selectedJob} chosenJobUpdate={chosenJobUpdate}
            />
        }
        if (page === 1) {
            return <ToInterviewPage selectedJob={selectedJob} />
        }
        if (page === 2) {
            return <SentOffersPage selectedJob={selectedJob} />
        }
        if (page === 3) {
            return <DeclinedPage selectedJob={selectedJob} />
        }
    }


    if (isLoading) {
        return (
            <div>Loading!!!!!!!!!</div>
        )
    }
    else {
        return (
            <>
                <div className="candidates-page-container">
                    <div className="head-section">

                        {jobsByCompanyId && (
                            <select name="jobs" id="jobs-dropdown" value={JobFromMyJobs.length > 0 ? JobFromMyJobs.id : selectedJob} onChange={(e) => { setSelectedJob(e.target.value); setNewChosenJob(true) }}>
                                <option value={JobFromMyJobs.length > 0 ? JobFromMyJobs.id : ""}> {JobFromMyJobs.length > 0 ? JobFromMyJobs.title : chooseAJob}</option>
                                {jobsByCompanyId.map(job => (
                                    <option className='kkkk' key={job?.title} value={job?.id}>{job?.title}</option>
                                ))}
                            </select>
                        )}

                        <div className="pages-nav">
                            <p className={page === 0 ? "activePage" : ""} onClick={() => { setPage(0) }}>To Review</p>
                            <p className={page === 1 ? "activePage" : ""} onClick={() => { setPage(1) }}>To Interview</p>
                            <p className={page === 2 ? "activePage" : ""} onClick={() => { setPage(2) }}>Sent Offers</p>
                            <p className={page === 3 ? "activePage" : ""} onClick={() => { setPage(3) }}>Declined</p>
                        </div>

                        <div className="candidates-body">
                            {pageDisplay()}

                        </div>
                    </div>

                </div>
            </>
        )

    }


}

export default Candidates