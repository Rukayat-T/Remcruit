import { React, useState, useEffect } from 'react'
import './sentOffersStyles.css'
import CandidatesBox from './candidatesBox/CandidatesBox'
import ApplicationBox from './applicationBox/applicationBox'

function SentOffersPage({ candidatesOfferSent }) {
    console.log(candidatesOfferSent)

    const applicationStatus = "Offer Sent"

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
        getCandidateById(chosenCandidateId)
    }, [chosenCandidateId])


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