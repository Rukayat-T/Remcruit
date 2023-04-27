import React, { useContext, useEffect, useState } from 'react'
import CompanyContext from '../../../../context/CompanyContext'

function FullJobDescription() {
    const {thecompany} = useContext(CompanyContext)
    const [job, setJob] = useState([])
    // const fetchjobs = async () => {
    //     try {
    //     const response = await fetch(
    //         "http://127.0.0.1:8000/employer/AllJobs/"
    //     ).then((response) => response.json());
    //     setJob(response);
    //     console.log(response)
    // }catch (err) {
    //     console.log(err);
    //   }};
    // useEffect( () => {
    //     fetchjobs()
    //     setJob()
    //     thecompany()
    // })
  return (
    <div>
      
    </div>
  )
}

export default FullJobDescription
