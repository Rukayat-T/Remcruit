import React, { useEffect, useState } from 'react'
import './LogoAndtermsStyles.css'
import ImageUpload from '../../components/imageUpload/imageUpload'
function LogoAndTermsTab({ formData, setFormData, setLogo }) {
    const [checked, setChecked] = useState(false)

    const [imageData, setImageData] = useState([])

    const checkboxHandler = (e) => {
        setFormData({ ...formData, terms_and_conditions: "True" })
    }

    const setImage = (image) => {
        setImageData(image)
        setLogo(image)
    }

    return (
        <>
            <ImageUpload setImageData={setImage} />
            <div className="termsAndConditions">
                <label>Terms and Conditions</label>
                <input
                    type="checkbox"
                    name="terms"
                    value="False"
                    onChange={checkboxHandler}
                />
                I accept the Terms and Conditions and Privacy Policy
            </div>
        </>
    )
}
export default LogoAndTermsTab