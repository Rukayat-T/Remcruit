import React from 'react'
import './YourOrganisationStyles.css'

function YourOrganisationTab({ formData, setFormData }) {
    return (
        <>
            <div className="organisationName">
                <label>Organisation Name*</label>
                <input
                    type="text"
                    name="OrgName"
                    value={formData.organisation_name}
                    onChange={(e) => setFormData({ ...formData, organisation_name: e.target.value })} />
            </div>

            <label>Office Address*</label>
            <div className="address">
                <textarea
                    type="text"
                    name="address"
                    value={formData.office_address}
                    onChange={(e) => setFormData({ ...formData, office_address: e.target.value })} />
                {/* <input type="text" name="street" placeholder='Street' />
                <input type="text" name="city" placeholder='City' />
                <input type="text" name="state" placeholder='State' />
                <input type="text" name="postcode" placeholder='Postcode' /> */}
            </div>
            <div className="organisationDesc">
                <label>Organisation Description*</label>
                <textarea
                    type="text"
                    name="OrgDesc"
                    value={formData.organisation_description}
                    onChange={(e) => setFormData({ ...formData, organisation_description: e.target.value })} />
                <p>2000 characters max, 50 characters min</p>
            </div>
            <div className="more">
                <div className="website">
                    <label>Organisation Website</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder='company.com' />
                </div>
                <div className="employees">
                    <label>Number of employees*</label>
                    <input
                        type="number"
                        name="employees"
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })} />
                </div>
            </div>
            <div className="more">
                <div className="recruitmentAgency">
                    <label>Are you a recruitment Agency?*</label>
                    <input
                        type="radio"
                        name="yes"
                        value="True"
                        onChange={(e) => setFormData({ ...formData, recruitment_agency: e.target.value })}
                        checked={formData.recruitment_agency === "True"}
                    /> Yes
                    <input
                        type="radio"
                        name="no"
                        value="False"
                        onChange={(e) => setFormData({ ...formData, recruitment_agency: e.target.value })}
                        checked={formData.recruitment_agency === "False"} /> No
                </div>
                <div className="industry">
                    <label>Primary Industry*</label>
                    <input
                        type="text"
                        name="employees"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })} />
                </div>
            </div>
        </>
    )
}
export default YourOrganisationTab