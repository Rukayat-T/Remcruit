import React, { useState } from 'react'
import "./notificationStyles.css"

function Notifications() {

    const jobs = [
        { 'id': 1, "color": "red", "saturation": 10 },
        { 'id': 2, "color": "orange", "saturation": 6 },
        { 'id': 3, "color": "yellow", "saturation": 20 },
        { 'id': 4, "color": "green", "saturation": 90 },
        { 'id': 5, "color": "blue", "saturation": 70 },
        { 'id': 6, "color": "indigo", "saturation": 33 },
        { 'id': 7, "color": "violet", "saturation": 67 }
    ]

    const [jobClick, setJobClick] = useState()

    const handleClick = (jobClicked) => {
        const findJob = jobs.find(element => element.id == jobClicked?.id);
        const currIndex = jobs.indexOf(findJob)
        const newIndex = 0
        const element = jobs.splice(currIndex, 1)[0];
        jobs.splice(newIndex, 0, element);
        console.log(element)
        console.log(jobs)
        // console.log(jobClicked)
    }

    handleClick(jobClick)


    return (
        <>
            <div className="">
                {jobs.length > 0 && (
                    <>
                        {jobs.map((job, index) => (
                            <>
                                <div className="eachJob" onClick={() => setJobClick(job)}>
                                    <p>{job.color}</p>
                                    <p>{job.saturation}</p>
                                </div>
                            </>

                        ))}
                    </>
                )}

            </div>
        </>
    )
}

export default Notifications