import React, {useContext} from 'react'
import './homePageStyles.css'
import JobBox from '../../Components/jobBoxComponent/jobBox'
import Footer from '../../../components/Footer/Footer'
import AuthContext from '../../../context/AuthContext'

function HomePage() {
    let {user} = useContext(AuthContext)
    return (
        <div>
            <div className="homepage-content">
            {user && <p>Hello {user.username}</p>}
            homePage
            <JobBox />
            </div>
            
            <Footer/>
        </div>
    )
}

export default HomePage