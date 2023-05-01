import React, { useContext, useEffect, useState } from 'react'
import './candidatesStyles.css'
import ToReviewPage from './ToReviewPage'
import ToInterviewPage from './ToInterviewPage'
import SentOffersPage from './SentOffersPage'
import DeclinedPage from './DeclinedPage'
import AuthContext from '../../../../context/AuthContext'

function Candidates({ JobFromMyJobs }) {
    let { company } = useContext(AuthContext)
    console.log(JobFromMyJobs)

    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const [jobsByCompanyId, setJobsByCompanyId] = useState([])
    const [candidatesByJobId, setCandidatesByJobId] = useState([])
    const [candidatesInReview, setCandidatesInReview] = useState([])
    const [candidatesInterview, setCandidatesInterview] = useState([])
    const [candidatesDeclined, setCandidatesDeclined] = useState([])
    const [candidatesOfferSent, setCandidatesOfferSent] = useState([])
    const [selectedJob, setSelectedJob] = useState(JobFromMyJobs.id)
    console.log(selectedJob)

    const getJobsByCompanyId = async (id) => {
        try {
            // setIsLoading(true)
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getJobByCompanyId/${id}/`


            )
                .then((response) => response.json());
            console.log(response)
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
            console.log(response)
            setCandidatesByJobId(response)
        }
        catch (error) {
            console.log(error)
        }
    }
    const getCandidatesByJobIdInReview = async (id, status) => {
        try {
            // setIsLoading(true)
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getCandidatesByJobIdAndStatus/${id}/${status}`
            )
                .then((response) => response.json());
            // console.log(response)
            // setIsLoading(false)
            setCandidatesInReview(response)
        }
        catch (error) {
            // setIsLoading(true)
            console.log(error)
        }
    }
    const getCandidatesByJobIdInterview = async (id, status) => {
        try {
            // setIsLoading(true)
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getCandidatesByJobIdAndStatus/${id}/${status}`
            )
                .then((response) => response.json());
            // console.log(response)
            // setIsLoading(false)
            setCandidatesInterview(response)
        }
        catch (error) {
            // setIsLoading(true)
            console.log(error)
        }
    }
    const getCandidatesByJobIdDeclined = async (id, status) => {
        try {
            // setIsLoading(true)
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getCandidatesByJobIdAndStatus/${id}/${status}`
            )
                .then((response) => response.json());
            // console.log(response)
            // setIsLoading(false)
            setCandidatesDeclined(response)
        }
        catch (error) {
            // setIsLoading(true)
            console.log(error)
        }
    }
    const getCandidatesByJobIdOfferSent = async (id, status) => {
        try {
            // setIsLoading(true)
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getCandidatesByJobIdAndStatus/${id}/${status}`
            )
                .then((response) => response.json());
            // console.log(response)
            // setIsLoading(false)
            setCandidatesOfferSent(response)
        }
        catch (error) {
            // setIsLoading(true)
            console.log(error)
        }
    }

    useEffect(() => {
        getJobsByCompanyId(company?.id)
    }, [company?.id])

    useEffect(() => {
        if (selectedJob) {
            getCandidatesByJobIdInReview(selectedJob, "In Review")
            getCandidatesByJobIdInterview(selectedJob, "Interview")
            getCandidatesByJobIdDeclined(selectedJob, "Declined")
            getCandidatesByJobIdOfferSent(selectedJob, "Declined")
        }
        console.log(candidatesInterview, "candidates in interview")

    }, [selectedJob?.subject])


    const pageDisplay = () => {
        if (page === 0) {
            return <ToReviewPage
                candidatesInReview={candidatesInReview}
            />
        }
        if (page === 1) {
            return <ToInterviewPage
                candidatesInterview={candidatesInterview} />
        }
        if (page === 2) {
            return <SentOffersPage candidatesOfferSent={candidatesOfferSent} />
        }
        if (page === 3) {
            return <DeclinedPage candidatesDeclined={candidatesDeclined} />
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
                            <select name="jobs" id="jobs-dropdown" value={JobFromMyJobs ? JobFromMyJobs.id : ""} onChange={(e) => { setSelectedJob(e.target.value) }}>
                                <option value={JobFromMyJobs ? JobFromMyJobs.id : ""}> {JobFromMyJobs ? JobFromMyJobs.title : "choose a job"}</option>
                                {jobsByCompanyId.map(job => (
                                    <option className='kkkk' key={job?.title} value={job?.id}>{JobFromMyJobs?.title === job.title ? "" : job?.title}</option>
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