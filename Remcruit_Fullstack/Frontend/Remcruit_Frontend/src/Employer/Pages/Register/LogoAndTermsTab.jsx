import React, { useState } from 'react'
import ImageUpload from './components/imageUpload/imageUpload'
import './LogoAndtermsStyles.css'

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