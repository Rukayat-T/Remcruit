import React, { useEffect, useState } from 'react'
import './applicationBox.css'
import { useNavigate } from 'react-router'

function ApplicationBox({ chosenCandidate, applicationStatus, setNewStatusInt, setNewStatus }) {

    const navigate = useNavigate()

    const updateStatusToInterview = async (candidateId, newStatus) => {
        const statusdata = { "status": newStatus }

        try {
            let response = await fetch(`http://127.0.0.1:8000/employer/updateApplicationStatus/${candidateId}/`,
                {
                    method: "PATCH",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(statusdata),
                }).then((response) => response.json());
            console.log(response)
            // navigate()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

    }, [])


    const StatusUpdateButtons = () => {
        if (applicationStatus === "In Review") {
            return (
                <div className="buttonsSection">
                    <button onClick={() => {
                        updateStatusToInterview(chosenCandidate?.id, "Declined");
                        setNewStatus(true);
                    }}>Decline</button>
                    <button onClick={() => {
                        updateStatusToInterview(chosenCandidate?.id, "Interview");
                        setNewStatus(true);
                    }}>Interview</button>
                </div>
            )
        }
        else if (applicationStatus === "Interview") {
            return (
                <div className="buttonsSection">
                    <button onClick={() => {
                        updateStatusToInterview(chosenCandidate?.id, "Declined");
                        //updateStatusToInterview(chosenCandidate?.id, "In Review");
                        setNewStatusInt(true);
                        console.log("you clicked declined!")
                    }}>Decline</button>

                    <button onClick={() => {
                        updateStatusToInterview(chosenCandidate?.id, "Send Offer");
                        setNewStatusInt(true);
                    }}>Send Offer</button>
                </div>
            )
        }
        else if (applicationStatus === "Declined") {
            return (
                <div></div>
            )
        }
    }

    const DisplayApplicantionDetails = () => {
        if (chosenCandidate) {
            return (
                <div className='applicationBoxBody'>
                    <div className="personalInformationSection">
                        <div className="personalInformationSectionTitle"><p>Personal Information</p></div>
                        <div className="personalInformationSectionBody1">
                            <div className="col-1">
                                <p className='ti'>Full Name</p>
                                <p className='bo'>{chosenCandidate?.job_seeker?.user?.first_name} {chosenCandidate?.job_seeker?.user?.last_name}</p>
                            </div>
                            <div className="col-2">
                                <p className='ti'>Email Address</p>
                                <p className='bo'>{chosenCandidate?.job_seeker?.user?.username}</p>
                            </div>
                            <div className="row-0">
                                <div className="col-1">
                                    <p className='ti'>Phone Number</p>
                                    <p className='bo'>{chosenCandidate?.job_seeker?.phone_number}</p>
                                </div>
                            </div>
                        </div>
                        <div className="personalInformationSectionBody2">
                            <div className="col-1">
                                <p className='ti'>Univerisity</p>
                                <p className='bo'>{chosenCandidate?.job_seeker?.university_name} </p>
                            </div>
                            <div className="col-2">
                                <p className='ti'>Subject Of Study</p>
                                <p className='bo'>{chosenCandidate?.job_seeker?.subject_of_study}</p>
                            </div>
                            <div className="col-1">
                                <p className='ti'>Qualififcation Type</p>
                                <p className='bo'>{chosenCandidate?.job_seeker?.highest_qualification}</p>
                            </div>
                            <div className="col-2">
                                <p className='ti'>Degree Classififcation</p>
                                <p className='bo'>{chosenCandidate?.job_seeker?.degree_classification}</p>
                            </div>
                            <div className="col-1">
                                <p className='ti'>Year Of Graduation</p>
                                <p className='bo'>{chosenCandidate?.job_seeker?.year_of_graduation} </p>
                            </div>
                        </div>
                    </div>
                    <div className="professionalSummarySection">
                        <div className="professionalSummarySectionTitle"><p>Professional Summary</p></div>
                        <div className="professionalSummarySectionBody">
                            <p>{chosenCandidate?.job_seeker?.professional_summary}</p>
                        </div>
                    </div>
                    <div className="cvSection">
                        <div className="personalInformationSectionTitle">
                            <p>CV</p>
                        </div>
                        <div className="personalInformationSectionBody1">
                            <p>cv</p>
                        </div>
                    </div>
                    <div className="questionAnswersSection"> question answers </div>
                    <div className="buttonsSection">
                        {StatusUpdateButtons()}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className='applicationBoxBody'>
                    <p>Choose a Candidate!</p>
                </div>
            )
        }
    }

    return (
        <div className='applicationBox'>
            <div className='applicationBoxHead'>
                <div className='head1'>
                    <p> Application Details</p>
                </div>
            </div>
            <div className='applicationBoxBody'>
                {DisplayApplicantionDetails()}

            </div>
        </div>
    )
}

export default ApplicationBox