import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JobSeekerContext = createContext()

export default JobSeekerContext


export const JobSeekerProvider = ({ children }) => {
    let [jobseeker, setJobSeeker] = useState()
    const navigate = useNavigate()

    let jobSeeker = async (e) => {
        // e.preventDefault()
        let response = await fetch(
            `http://127.0.0.1:8000/jobseekers/jobseekerbyuserid/${user.id}/`
        ).then((response) => response.json());
        setJobSeeker(response)
        console.log(response)
    }

    let contextData = {
        jobseeker: jobseeker,
        jobSeeker: jobSeeker,
    }

    return (
        <JobSeekerContext.Provider value={contextData}>
            {children}
        </JobSeekerContext.Provider>
    )
}
