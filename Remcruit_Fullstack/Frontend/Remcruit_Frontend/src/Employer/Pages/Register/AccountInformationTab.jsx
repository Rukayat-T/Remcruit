import React, { useState } from 'react'
import './AccountInformationStyles.css'
// import './AccountInformationstyles.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function AccountInformationTab({ formData, setFormData }) {

    return (
        <>
            <div className='top'>
                <div className="ti">
                    <label>Title*</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder='Miss'
                    />
                </div>
            </div>
            <div className="name">
                <div className="firstName">
                    <label>First Name*</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.first_name}
                        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                        placeholder='Jane' />
                </div>
                <div className="lastName">
                    <label>Last Name*</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                        placeholder='Doe' />
                </div>
            </div>
            <div className="gend">
                <div className='gen'>
                    <label>Gender*</label>
                    <div className='gender'>
                        <div className='fem'>
                            <input
                                type="radio"
                                name="female"
                                value="Female"
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                checked={formData.gender === "Female"}
                            /> Female
                        </div>
                        <div className='mal'>
                            <input
                                type="radio"
                                name="male"
                                value="Male"
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                checked={formData.gender === "Male"}
                            /> Male
                        </div>
                    </div>
                </div>
                <div className="jobTitle">
                    <label>Job Title*</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={formData.job_title}
                        onChange={(e) => setFormData({ ...formData, job_title: e.target.value })}
                        placeholder='Manager' />
                </div>

            </div>
            <div className="phone">

                <div className="email">
                    <label>Email*</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder='example@example.com' />
                </div>
                <div className="phoneNo">
                    <label>Phone Number*</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phone_number}
                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                        placeholder='' />
                </div>
            </div>
            <div className="pass">
                <div className="password">
                    <label>Password*</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>
                <div className="confPassword">
                    <label>Confirm Password*</label>
                    <input
                        type="password"
                        name="password2"
                        value={formData.password2}
                        onChange={(e) => setFormData({ ...formData, password2: e.target.value })} />
                </div>
            </div>
        </>
    )
}
export default AccountInformationTab