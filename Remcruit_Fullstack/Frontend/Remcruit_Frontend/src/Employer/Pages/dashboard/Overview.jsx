import React, { useContext, useEffect, useState } from 'react'
import './overviewStyles.css'
import AuthContext from '../../../context/AuthContext';

function Overview({whatever}) {
  const [jobsByCompanyId, setJobsByCompanyId] = useState([]);
  let { company } = useContext(AuthContext)

  const getJobsByCompanyId = async (id) => {
    try {
      // setIsLoading(true)
      const response = await fetch(
        `http://0.0.0.0:8000/employer/getJobByCompanyId/${id}/`
      ).then((response) => response.json()); // console.log(response) // setIsLoading(false)
      setJobsByCompanyId(response);
    } catch (error) {
      // setIsLoading(true)
      console.log(error);
    }
  };

  const JobCandidatesCount = async (id) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/employer/getCandidatesCount/${id}`
      );
      let resJson = await response.json();
        return resJson
        
    } catch (error) {
      console.log(error);
    }
  };


const [candidates, setCandidates] = useState([]);
const empty = []
useEffect(() => {
    const candidateids = [1, 6]
    const  FetchCandidates = async () => {
        for (const id of candidateids) {
        (setCandidates(await JobCandidatesCount(id)))
        }
    }
    FetchCandidates()
   
  }, [whatever]);
  empty.join(candidates)
  console.log(empty)
  console.log('candidate0', candidates)
// console.log(jobsByCompanyId)
    return (
        <div className="">
        <div> this is Overview</div>
        {/* {candidates.map(candidate => {
            <p>{candidate}</p>
        })} */}
        <p>{JSON.stringify(candidates)}</p>
        {/* {jobsByCompanyId.length > 0 && (

                        jobsByCompanyId?.map((job) => (

                            <tr key={job.id}>
                                <td>{job?.title}</td>
                                <td>3</td>
                                <td>3</td>
                                <td>{job?.open_spots}</td>
                                <td>{job?.created_at}</td>
                                <td>{job?.application_deadline}</td>
                                <td>{job?.job_type}</td>
                                <td>{job?.location}</td>
                            </tr>
                        ))
                    )} */}
        
</div>
    )
}

export default Overview