import React, { useEffect, useState } from 'react'
import './candidatesBox.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faEllipsisVertical, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

function CandidatesBox({ candidates, getSpecificCandidate }) {

    const candidatesToBeReviewed = candidates

    const [candidateClicked, setCandidateClicked] = useState()

    const handleCandidateClick = (index, candidateId) => {
        // console.log("candidate " + candidateId + " clicked");
        setCandidateClicked(index)
        getSpecificCandidate(candidateId)
    }

    const DisplayCandidates = () => {
        if (candidatesToBeReviewed.length > 0) {
            return (
                <div className='candidatesBoxBodyContainer'>
                    <div className="candidates">

                        {candidatesToBeReviewed.length > 0 && (

                            candidatesToBeReviewed?.map((candidate, index) => (

                                <div key={index} className={index === candidateClicked ? "Candidate focused" : "eachCandidate"} onClick={() => { handleCandidateClick(index, candidate.id) }}>
                                    <div className="cand">
                                        <div className="profilePic"></div>
                                        <div className="candidateInfo">
                                            <div className="candidateName">
                                                <p> {candidate.job_seeker.user.first_name} {candidate.job_seeker.user.last_name}</p>
                                            </div>
                                            <div className="candidateRole">candidate role</div>
                                        </div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faChevronRight} className={index === candidateClicked ? "showIcon" : "none"} />
                                    </div>
                                </div>
                            )
                            )
                        )}
                    </div>
                </div>
            )
        }
        else {
            return (<div className='noCandidates'>No Candidates</div>)
        }
    }

    return (
        <div className='candidatesBox'>
            <div className="candidatesBoxHead">
                <div className='head1'>
                    <FontAwesomeIcon icon={faUser} className="nextIcon" />
                    <p> Candidates</p>
                </div>
                <div className='head2'>
                    <FontAwesomeIcon icon={faSearch} className="nextIcon" />
                    <FontAwesomeIcon icon={faEllipsisVertical} className="nextIcon" />
                </div>
            </div>
            <div className='candidatesBoxBody'>
                {DisplayCandidates()}
            </div>
        </div >
    )
}

export default CandidatesBox