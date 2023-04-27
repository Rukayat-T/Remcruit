import React, { useEffect, useState } from 'react'
import './reviewStyles.css'
import ApplicationBox from './applicationBox/ApplicationBox'
import CandidatesBox from './candidatesBox/CandidatesBox'

function ToReviewPage({ candidatesInReview }) {
    console.log(candidatesInReview)

    const [chosenCandidateId, setChoosenCandidateId] = useState()
    const [chosenCandidate, setChosenCandidate] = useState([])

    const applicationStatus = "In Review"

    const getSpecificCandidate = (candidateId) => {
        setChoosenCandidateId(candidateId)
    }
    console.log(chosenCandidateId, "chosen candidate Id")

    //get candidate by id

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

    useEffect(() => {
        getCandidateById(chosenCandidateId)

    }, [chosenCandidateId])


    return (
        <>
            <div className="reviewPageContainer">
                <div className="candidatesSection">
                    <CandidatesBox candidates={candidatesInReview} getSpecificCandidate={getSpecificCandidate} />
                </div>
                <div className="applicationSection"><ApplicationBox chosenCandidate={chosenCandidate} applicationStatus={applicationStatus} /></div>
            </div>
        </>
    )
}

export default ToReviewPage