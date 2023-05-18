import { React, useState, useEffect } from 'react'
import './sentOffersStyles.css'
import CandidatesBox from './candidatesBox/CandidatesBox'
import ApplicationBox from './applicationBox/applicationBox'

function SentOffersPage({ selectedJob }) {
    //console.log(candidatesOfferSent)

    const applicationStatus = "Offer Sent"
    const [candidatesOfferSent, setCandidatesOfferSent] = useState([])

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

    const [chosenCandidateId, setChoosenCandidateId] = useState()
    const [chosenCandidate, setChosenCandidate] = useState([])

    const getSpecificCandidate = (candidateId) => {
        setChoosenCandidateId(candidateId)
    }

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
        if (selectedJob) {
            getCandidatesByJobIdOfferSent(selectedJob, "Offer Sent")
        }
        getCandidateById(chosenCandidateId)
    }, [chosenCandidateId, selectedJob])

    return (
        <>
            <div className="reviewPageContainer">
                <div className="candidatesSection"><CandidatesBox candidates={candidatesOfferSent} getSpecificCandidate={getSpecificCandidate} /></div>
                <div className="applicationSection"><ApplicationBox chosenCandidate={chosenCandidate} applicationStatus={applicationStatus} /></div>
            </div>
        </>
    )
}

export default SentOffersPage