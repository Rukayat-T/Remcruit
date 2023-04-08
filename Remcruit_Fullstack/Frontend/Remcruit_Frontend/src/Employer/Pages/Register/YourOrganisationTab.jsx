import React from 'react'
import '/Users/ruka/Desktop/RemcruitFolder/Remcruit/Remcruit_Fullstack/Frontend/Remcruit_Frontend/src/Employer/Pages/Register/YourOrganisationStyles.css'

function YourOrganisationTab() {
    return (
        <>
            <div className="organisationName">
                <label>Organisation Name*</label>
                <input type="text" name="OrgName" />
            </div>

            <label>Office Address*</label>
            <div className="address">
                <input type="text" name="street" placeholder='Street' />
                <input type="text" name="city" placeholder='City' />
                <input type="text" name="state" placeholder='State' />
                <input type="text" name="postcode" placeholder='Postcode' />
            </div>
            <div className="organisationDesc">
                <label>Organisation Description*</label>
                <textarea type="text" name="OrgDesc" />
                <p>2000 characters max, 50 characters min</p>
            </div>
            <div className="more">
                <div className="website">
                    <label>Organisation Website</label>
                    <input type="text" name="firstname" placeholder='company.com' />
                </div>
                <div className="employees">
                    <label>Number of employees*</label>
                    <input type="number" name="employees" />
                </div>
            </div>
            <div className="more">
                <div className="recruitmentAgency">
                    <label>Are you a recruitment Agency?*</label>
                    <input type="radio" name="yes" /> Yes
                    <input type="radio" name="no" /> No
                </div>
                <div className="industry">
                    <label>Primary Industry*</label>
                    <input type="text" name="employees" />
                </div>
            </div>
        </>
    )
}
export default YourOrganisationTab