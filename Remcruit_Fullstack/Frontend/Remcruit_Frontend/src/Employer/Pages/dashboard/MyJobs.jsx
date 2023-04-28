import React, { useContext, useEffect, useState } from 'react'
import './myJobsStyles.css'
import AuthContext from '../../../context/AuthContext'

function MyJobs() {


    let { company } = useContext(AuthContext)
    const [jobsByCompanyId, setJobsByCompanyId] = useState([])

    const getJobsByCompanyId = async (id) => {
        try {
            // setIsLoading(true)
            const response = await fetch(
                `http://0.0.0.0:8000/employer/getJobByCompanyId/${id}/`
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

    useEffect(() => {
        getJobsByCompanyId(company?.id)
        console.log(company?.id)
    }, [company?.id])


    return (
        <>
            <div className="jobPostings-container">

                <table id='jobs'>
                    <thead>
                        <tr>
                            <td colSpan='3' align='left'>My Job Postings</td>
                            <td colSpan='3'>search</td>
                            <td colSpan='1'>del</td>
                        </tr>
                    </thead>
                    <tr className='tableHead'>
                        <th>Positions</th>
                        <th>Candidates</th>
                        <th>Vacancies</th>
                        <th>Published Date</th>
                        <th>Deadline</th>
                        <th>Job Type</th>
                        <th>Location</th>
                    </tr>
                    {jobsByCompanyId.length > 0 && (
                        jobsByCompanyId?.map((job) => (

                            <tr key={job.id}>
                                <td>{job?.title}</td>
                                <td>3</td>
                                <td>{job?.open_spots}</td>
                                <td>{job?.created_at}</td>
                                <td>{job?.application_deadline}</td>
                                <td>{job?.job_type}</td>
                                <td>{job?.location}</td>
                            </tr>
                        ))
                    )}

                </table>
            </div>
        </>
    )
}

export default MyJobs