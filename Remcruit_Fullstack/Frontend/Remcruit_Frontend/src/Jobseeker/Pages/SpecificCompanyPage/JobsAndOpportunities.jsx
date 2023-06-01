import React, { useEffect, useState } from 'react'
import JobBox from '../../Components/jobBoxComponent/jobBox';

function JobsAndOpportunities({ company }) {

    const [jobsByCompanyId, setJobsByCompanyId] = useState([])

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

    useEffect(() => {
        getJobsByCompanyId(company?.id)
    },
        [jobsByCompanyId])

    return (
        <>
            <div className="feed">
                <div className="feedContent">
                    {jobsByCompanyId.length > 0 && (
                        <div className="feedContent">
                            {jobsByCompanyId.map(job => (
                                <JobBox job={job} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default JobsAndOpportunities