import React from 'react'
import './homePageStyles.css'
import JobBox from '../../Components/jobBoxComponent/jobBox'

function HomePage() {
    return (
        <div>
            {/* {user && <p>Hello {user.username}</p>} */}
            homePage
            <JobBox />
        </div>
    )
}

export default HomePage