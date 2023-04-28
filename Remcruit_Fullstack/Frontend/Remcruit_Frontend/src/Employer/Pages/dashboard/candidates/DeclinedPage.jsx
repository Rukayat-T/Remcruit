import { React, useEffect, useState } from 'react'
import './declinedStyles.css'
import CandidatesBox from './candidatesBox/CandidatesBox'
import ApplicationBox from './applicationBox/applicationBox'

function DeclinedPage({ candidatesDeclined }) {
    console.log(candidatesDeclined)

    const applicationStatus = "Declined"

    const [chosenCandidateId, setChoosenCandidateId] = useState()
    const [chosenCandidate, setChosenCandidate] = useState([])
    console.log(chosenCandidate)

    const getSpecificCandidate = (candidateId) => {
        setChoosenCandidateId(candidateId)
    }
    console.log(chosenCandidateId, "chosen candidate Id")

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
                <div className="candidatesSection"><CandidatesBox candidates={candidatesDeclined} getSpecificCandidate={getSpecificCandidate} /></div>
                <div className="applicationSection"><ApplicationBox chosenCandidate={chosenCandidate} applicationStatus={applicationStatus} /></div>
            </div>
        </>
    )
}

export default DeclinedPage