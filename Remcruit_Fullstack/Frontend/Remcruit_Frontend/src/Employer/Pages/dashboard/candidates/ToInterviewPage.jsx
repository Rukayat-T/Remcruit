import React, { useEffect, useState } from 'react'
import './interviewStyles.css'
import CandidatesBox from './candidatesBox/CandidatesBox'
import ApplicationBox from './applicationBox/applicationBox'

function ToInterviewPage({ selectedJob }) {

    const [statusUpdate, setStatusUpdate] = useState(false)

    const setNewStatus = (value) => {
        if (value) {
            setStatusUpdate(value)
            console.log(value)
        }
    }

    const applicationStatus = "Interview"

    const [chosenCandidateId, setChoosenCandidateId] = useState()
    const [chosenCandidate, setChosenCandidate] = useState([])
    const [candidatesInterview, setCandidatesInterview] = useState([])
    // console.log(chosenCandidate)

    const getSpecificCandidate = (candidateId) => {
        setChoosenCandidateId(candidateId)
    }
    // console.log(chosenCandidateId, "chosen candidate Id")

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
            getCandidatesByJobIdInterview(selectedJob, "Interview")
        }

        console.log("yayy")

        getCandidateById(chosenCandidateId)

    }, [chosenCandidateId, selectedJob, statusUpdate])

    return (

        <>
            <div className="reviewPageContainer">
                <div className="candidatesSection"><CandidatesBox candidates={candidatesInterview} getSpecificCandidate={getSpecificCandidate} /></div>
                <div className="applicationSection"><ApplicationBox chosenCandidate={chosenCandidate} applicationStatus={applicationStatus} setNewStatusInt={setNewStatus} /></div>
            </div>
        </>
    )
}

export default ToInterviewPage