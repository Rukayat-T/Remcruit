import React, { useState } from 'react'
import ImageUpload from '../../components/imageUpload/imageUpload'
import '/Users/ruka/Desktop/RemcruitFolder/Remcruit/Remcruit_Fullstack/Frontend/Remcruit_Frontend/src/Employer/Pages/Register/LogoAndtermsStyles.css'

function LogoAndTermsTab({ formData, setFormData }) {
    const [checked, setChecked] = useState(false)

    const checkboxHandler = (e) => {
        setFormData({ ...formData, terms_and_conditions: e.target.value })
    }

    return (
        <>
            <ImageUpload />
            <div className="termsAndConditions">
                <label>Terms and Conditions</label>
                <input
                    type="checkbox"
                    name="terms"
                    value="False"
                    onChange={checkboxHandler}
                // 
                />
                I accept the Terms and Conditions and Privacy Policy
            </div>
        </>
    )
}
export default LogoAndTermsTab