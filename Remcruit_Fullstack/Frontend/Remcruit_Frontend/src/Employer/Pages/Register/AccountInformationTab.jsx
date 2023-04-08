import React from 'react'
import './AccountInformationStyles.css'
import '/Users/ruka/Desktop/RemcruitFolder/Remcruit/Remcruit_Fullstack/Frontend/Remcruit_Frontend/src/Employer/Pages/Register/AccountInformationstyles.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function AccountInformationTab() {
    return (
        <>
            <div className='top'>

                <div className="ti">
                    <label>Title*</label>
                    <input type="text" name="name" placeholder='Miss' />
                </div>
                <div className='gen'>
                    <div>
                        <label>Gender*</label>
                    </div>
                    <div className='gender'>
                        <div className='female'>
                            <input type="radio" name="female" /> Female
                        </div>
                        <div className='male'>
                            <input type="radio" name="male" /> Male
                        </div>
                    </div>
                </div>
            </div>
            <div className="name">
                <div className="firstName">
                    <label>First Name*</label>
                    <input type="text" name="firstname" placeholder='Jane' />
                </div>
                <div className="lastName">
                    <label>Last Name*</label>
                    <input type="text" name="lastname" placeholder='Doe' />
                </div>
            </div>
            <div className="job">
                <div className="jobTitle">
                    <label>Job Title*</label>
                    <input type="text" name="jobTitle" placeholder='Manager' />
                </div>
                <div className="email">
                    <label>Email*</label>
                    <input type="text" name="email" placeholder='example@example.com' />
                </div>
            </div>
            <div className="phone">
                <div className="phoneNo">
                    <label>Phone Number*</label>
                    <input type="tel" name="phoneNumber" placeholder='' />
                </div>
                <div className="confPhoneNo">
                    <label>Confirm Phone Number*</label>
                    <input type="tel" name="confPhoneNumber" />
                </div>
            </div>
            <div className="pass">
                <div className="password">
                    <label>Password*</label>
                    <input type="password" name="passwprd" />
                </div>
                <div className="confPassword">
                    <label>Confirm Password*</label>
                    <input type="password" name="password2" />
                </div>
            </div>
        </>
    )
}
export default AccountInformationTab