import React, { useEffect, useState } from 'react'
import './reviewStyles.css'
import ApplicationBox from './applicationBox/ApplicationBox'
import CandidatesBox from './candidatesBox/CandidatesBox'

function ToReviewPage({ selectedJob, chosenJobUpdate }) {

    const [candidatesInReview, setCandidatesInReview] = useState([])
    const [chosenCandidateId, setChoosenCandidateId] = useState()
    const [chosenCandidate, setChosenCandidate] = useState([])

    const [statusUpdate, setStatusUpdate] = useState(false)

    const setNewStatus = (value) => {
        if (value) {
            setStatusUpdate(value)
            console.log(value)
        }
    }

    const applicationStatus = "In Review"

    const getSpecificCandidate = (candidateId) => {
        setChoosenCandidateId(candidateId)
    }
    // console.log(chosenCandidateId, "chosen candidate Id")

    const getCandidateById = async (id) => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getCandidateById/${id}`
            )
                .then((response) => response.json());
            // console.log(response)
            setChosenCandidate(response)
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
            if (response.length < 0) {
                setCandidatesInReview([])
            }
            else {
                setCandidatesInReview(response)
            }

        }
        catch (error) {
            // setIsLoading(true)
            console.log(error)
        }
    }

    useEffect(() => {
        if (selectedJob) {
            getCandidatesByJobIdInReview(selectedJob, "In Review")
        }

        // console.log("its working?")
        // console.log(selectedJob)

        getCandidateById(chosenCandidateId)
    }, [chosenCandidateId, selectedJob, statusUpdate])



    return (
        <>
            <div className="reviewPageContainer">
                <div className="candidatesSection">
                    <CandidatesBox candidates={candidatesInReview} getSpecificCandidate={getSpecificCandidate} />
                </div>
                <div className="applicationSection"><ApplicationBox chosenCandidate={chosenCandidate} applicationStatus={applicationStatus} setNewStatus={setNewStatus} /></div>
            </div>
        </>
    )
}

export default ToReviewPage