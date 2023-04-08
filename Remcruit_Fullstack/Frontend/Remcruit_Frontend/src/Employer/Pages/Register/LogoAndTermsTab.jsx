import React from 'react'
import ImageUpload from './components/imageUpload/imageUpload'
import '/Users/ruka/Desktop/RemcruitFolder/Remcruit/Remcruit_Fullstack/Frontend/Remcruit_Frontend/src/Employer/Pages/Register/LogoAndtermsStyles.css'

function LogoAndTermsTab() {
    return (
        <>
            <ImageUpload />

            <div className="termsAndConditions">
                <label>Terms and Conditions</label>
                <input type="checkbox" name="terms" />
                I accept the Terms and Conditions and Privacy Policy
            </div>
            <input type="submit" value="Register" id="registerBtn" />
        </>
    )
}
export default LogoAndTermsTab