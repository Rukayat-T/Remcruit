import React, { useContext, useEffect, useState } from 'react'
import './myCompanyStyles.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import AuthContext from '../../../context/AuthContext'
import { useNavigate } from 'react-router'


function MyCompany() {
    let navigate = useNavigate()
    let { company, getEmployerCompany } = useContext(AuthContext)
    console.log(company.user.first_name)

    const [profileData, setProfileData] = useState({
        email: company?.user.username,
        first_name: company.user.first_name,
        last_name: company.user.last_name,
        gender: company?.gender,
        organisation_name: company?.organisation_name,
        office_address: company?.office_address,
        organisation_description: company?.organisation_description,
        industry: company?.industry,
        website: company?.website,
        employees: company?.employees,
        phone_number: company?.phone_number
    })

    const updateEmployerInformation = async (companyId) => {
        // console.log(profileData)

        try {
            let response = await fetch(`http://0.0.0.0:8000/employer/Employer/${companyId}/`,
                {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(profileData),
                }).then((response) => response.json());
            console.log(response)
            setIsEdit(false)
            getEmployerCompany(company?.user.id)
            setTimeout(() => {
                navigate(0)
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }
    const [genderChoices, setGenderChoices] = useState([])
    const genderDefaultValue = company?.gender

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/jobseekers/choices/`)
            .then(response => response.json())
            .then(data => setGenderChoices(data.gender_choices))
            .catch(error => console.log(error));
    }, [])

    const [isedit, setIsEdit] = useState(false)
    return (
        <>
            <div className="all-content">
                <div className="column1">
                    <div className="col-title">
                        <p>Company Logo</p>
                    </div>
                    <div className="col-body">

                        <div className="half1">
                            <div className="logo"></div>
                            <p> <FontAwesomeIcon icon={faImage} /> Change Your Logo</p>
                        </div>
                        <div className="half2">
                            <div className="col-title">
                                <p>Personal Information</p>
                            </div>

                            <div className="half2-body">
                                <div className="formTag">
                                    <div className="info">
                                        <label htmlFor="">First Name</label>
                                        <input
                                            type="text"
                                            disabled={isedit ? false : true}
                                            value={isedit === false ? company?.user.first_name : profileData.first_name}
                                            onChange={(e) => setProfileData({ ...profileData, first_name: e.target.value })} />
                                    </div>
                                    <div className="info">
                                        <label htmlFor="">Last Name</label>
                                        <input
                                            type="text"
                                            disabled={isedit ? false : true}
                                            value={isedit === false ? company?.user.last_name : profileData.last_name}
                                            onChange={(e) => setProfileData({ ...profileData, last_name: e.target.value })} />
                                    </div>
                                    <div className="info">
                                        <label htmlFor="">Gender</label>
                                        <select name="" id="gender" value={isedit === false ? genderDefaultValue : profileData.gender} disabled={isedit ? false : true} onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })} >
                                            {genderChoices?.map(choice => (
                                                <option key={choice[0]} value={choice[1]}>
                                                    {choice[1]}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="info">
                                        <label htmlFor="">Email Address</label>
                                        <input
                                            type="text"
                                            disabled
                                            value={company.user.username}
                                        // value={isedit === false ? company?.username : profileData.username}
                                        // onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}  
                                        />
                                    </div>
                                    <div className="info">
                                        <label htmlFor="">Phone Number</label>
                                        <input
                                            type="text"
                                            disabled={isedit ? false : true}
                                            value={isedit === false ? company?.phone_number : profileData.phone_number}
                                            onChange={(e) => setProfileData({ ...profileData, phone_number: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="column1">
                    <div className="col-title">
                        <p>Company Information</p>
                    </div>
                    <div className="col-body">
                        <div className="formTag">
                            <div className="info">
                                <label htmlFor="">Organisation Name</label>
                                <input
                                    type="text"
                                    disabled={isedit ? false : true}
                                    value={isedit === false ? company?.organisation_name : profileData.organisation_name}
                                    onChange={(e) => setProfileData({ ...profileData, organisation_name: e.target.value })} />
                            </div>
                            <div className="info">
                                <label htmlFor="">Website</label>
                                <input
                                    type="text"
                                    disabled={isedit ? false : true}
                                    value={isedit === false ? company?.website : profileData.website}
                                    onChange={(e) => setProfileData({ ...profileData, website: e.target.value })} />
                            </div>
                            <div className="info">
                                <label htmlFor="">Industry</label>
                                <input
                                    type="text"
                                    disabled={isedit ? false : true}
                                    value={isedit === false ? company?.industry : profileData.industry}
                                    onChange={(e) => setProfileData({ ...profileData, industry: e.target.value })} />
                            </div>
                            <div className="info">
                                <label htmlFor="">Organisation Description</label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    disabled={isedit ? false : true}
                                    value={isedit === false ? company?.organisation_description : profileData.organisation_description}
                                    onChange={(e) => setProfileData({ ...profileData, organisation_description: e.target.value })}  ></textarea>
                            </div>
                            <div className="info">
                                <label htmlFor="">Office Address</label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="3"
                                    disabled={isedit ? false : true}
                                    value={isedit === false ? company?.office_address : profileData.office_address}
                                    onChange={(e) => setProfileData({ ...profileData, office_address: e.target.value })} ></textarea>
                            </div>
                            <div className="info">
                                <label htmlFor="">Employees</label>
                                <input
                                    type="text"
                                    disabled={isedit ? false : true}
                                    value={isedit === false ? company?.employees : profileData.employees}
                                    onChange={(e) => setProfileData({ ...profileData, employees: e.target.value })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column1">
                    <div className="col-title">
                        <p>Billing Information</p>
                    </div>
                    <div className="col-body">
                        <div className="formTag">
                            <div className="info">
                                <label htmlFor="">First Name</label>
                                <input type="text"
                                    disabled={isedit ? false : true}
                                    value={isedit === false ? company?.first_name : profileData.first_name}
                                    onChange={(e) => setProfileData({ ...profileData, first_name: e.target.value })} />
                            </div>
                            <div className="info">
                                <label htmlFor="">Last Name</label>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <label htmlFor="">Gender</label>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <label htmlFor="">Email Address</label>
                                <input type="text" />
                            </div>
                            <div className="info">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" />
                            </div>

                            <div className="info">
                                {isedit === false ?
                                    <button onClick={() => { setIsEdit(true) }}>edit</button>
                                    :
                                    <div>
                                        <button onClick={() => { updateEmployerInformation(company?.id) }}>submit</button>
                                        <button onClick={() => { setIsEdit(false) }}>cancel</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCompany