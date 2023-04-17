import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'
import './userComponent.css'

function UserComponent() {
    let { user } = useContext(AuthContext)

    return (
        <div className='userComponent'>
            <div className="profilePicture"></div>
            <div>
                {user && <p className='name'>{user.first_name} {user.last_name}</p>}
            </div>
            <div className="moreInfo">
                <p className="roleType">UI/UX Designer </p>
                <p>.</p>
                <p className="industrySector"> Computer science</p>
            </div>
            <div className="editProfile">
                <button className='editProfileBtn'>Edit Profile</button>
            </div>

        </div>
    )
}

export default UserComponent