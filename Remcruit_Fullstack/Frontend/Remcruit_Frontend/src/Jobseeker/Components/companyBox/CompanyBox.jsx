import React, { useContext } from 'react'
import './companyBox.css'
import AuthContext from '../../../context/AuthContext'

function CompanyBox({ company }) {
    console.log(company)
    const companyLogo = company?.company_logo
    const description = company?.organisation_description
    return (
        <>
            <div id='cBox'>
                <div className="company-header-section">
                    <div className="companylogo">
                        {
                            companyLogo != null ? <img src={company?.company_logo} alt="" /> : <div className="noLogo"></div>
                        }
                    </div>
                    <div className="company-name">{company?.organisation_name}</div>

                </div>
                <div className="company-body-section">
                    {/* {company?.organisation_description} */}
                    {description?.substring(0, 50)}
                </div>
                <div className="company-footer-section">
                    <div className="view-details">
                        <button>Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyBox