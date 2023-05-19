import React, { useContext, useEffect, useState } from 'react'
import './myJobsStyles.css'
import AuthContext from '../../../context/AuthContext'
import LoadingSpinner from '../../../components/loading/LoadingSpinner'

function MyJobs({ getJobFromMyJobs, goToCandidatesPage }) {

    let { company, jobsByCompany } = useContext(AuthContext)
    //console.log(jobsByCompany)
    const [jobsByCompanyId, setJobsByCompanyId] = useState([])
    const [candidatesCount, setCandidatesCount] = useState([])
    const [isLoadingCandidates, setIsLoadingCanididates] = useState(true)
    const [choosenJob, setChoosenJob] = useState([])

    getJobFromMyJobs(choosenJob)

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

    const getcandidatesCountByCompanyId = async (id) => {
        try {
            setIsLoadingCanididates(true)
            const response = await fetch(
                `http://0.0.0.0:8000/employer/JobsCount/${id}`
            )
                .then((response) => response.json());
            //console.log(response)
            setIsLoadingCanididates(false)
            setCandidatesCount(response)
        }
        catch (error) {
            setIsLoadingCanididates(true)
            console.log(error)
        }
    }

    const ReturnCount = (index) => {
        const count = candidatesCount[index]
        if (isLoadingCandidates) {
            return (<LoadingSpinner />)
        }
        else {
            return (<p>{count}</p>)
        }
    }

    useEffect(() => {
        getcandidatesCountByCompanyId(company?.id)

        getJobsByCompanyId(company?.id)

    }, [company?.id])

    return (
        <>
            <div className="jobPostings-container">

                <table id='jobs'>
                    <thead>
                        <tr>
                            <td colSpan='4.5' align='left'>My Job Postings</td>
                            <td colSpan='2'>search</td>
                            <td colSpan='0.5'>del</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tableHead'>
                            <th>Positions</th>
                            <th>Candidates</th>
                            <th>Vacancies</th>
                            <th>Published Date</th>
                            <th>Deadline</th>
                            <th>Job Type</th>
                            <th>Location</th>
                        </tr>
                        {jobsByCompanyId?.length > 0 && (

                            jobsByCompanyId?.map((job, index) => (

                                <tr key={job.id} onClick={() => { setChoosenJob(job); setTimeout(() => { goToCandidatesPage(5) }, 300); }} className='jobRow'>
                                    <td>{job?.title}</td>
                                    <td>{ReturnCount(index)}</td>
                                    <td>{job?.open_spots}</td>
                                    <td>{job?.created_at}</td>
                                    <td>{job?.application_deadline}</td>
                                    <td>{job?.job_type}</td>
                                    <td>{job?.location}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MyJobs