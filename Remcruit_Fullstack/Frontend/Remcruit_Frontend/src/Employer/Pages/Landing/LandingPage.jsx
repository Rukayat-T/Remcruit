import React from 'react'
//rfce
import EmployerNavbar from '../../components/navbarlanding/navbar'
import Posting from '../../components/samplePosting/posting'
import './landingStyles.css'

function LandingPage() {

    return (
        <>
            <EmployerNavbar />
            <div className="all">

                <div className="heroSection">
                    <div className='leftHero'>
                        <div className="titleSection">
                            < Posting />
                        </div>
                        <div className="companiesSection"></div>
                    </div>
                    <div className="womanSection">woman</div>
                </div>
                <div className="cardsSection">
                    <div className="gold">Gold</div>
                    <div className="platinum">Platinum</div>
                    <div className="silver">Silver</div>
                </div>
                <div className="featuresSection">
                    <div className="feature">job board <hr /></div>
                    <div className="feature">dashboard <hr /></div>
                    <div className="feature">analytics <hr /></div>
                    <div className="feature">productivity tools <hr /></div>
                    <div className="feature">candidate management <hr /></div>
                    <div className="feature">spotlight jobs <hr /></div>
                    <div className="feature">ad management <hr /></div>
                    <div className="feature">feature <hr /></div>
                </div>
                <div className="studentsSection">
                    <div className="studentsContainer">Reach students</div>
                </div>
                <div className="statsSection">
                    <div className="statsContainer">
                        <div className="box">active</div>
                        <div className="box">visits</div>
                        <div className="box">job views</div>
                        <div className="box">applications</div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LandingPage