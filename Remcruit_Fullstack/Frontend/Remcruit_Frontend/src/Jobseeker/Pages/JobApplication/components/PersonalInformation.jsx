import React, { useContext, useState } from "react";
import '../static/Steps.css'
import StateData from '../StateData.json'
import AuthContext from "../../../../context/AuthContext";


function PersonalInformation({data, setData}) {
  const [states, setStates] = useState(StateData)

  let { user } = useContext(AuthContext)
  // console.log(user)
  return (
    <div className="personal-info-form-container">
      <form action="" className="personal-info">
        <input type="text" 
        placeholder="First Name"
        value={user.first_name}
        onChange={(e) => setData({...data, first_name: e.target.value})}
         />
        <input type="text" 
        placeholder="Last Name"
        value={user.last_name}
        onChange={(e) => setData({...data, last_name: e.target.value})}
        />
        <input type="email" 
        placeholder="Email Address"
        value={user.username}
        onChange={(e) => setData({...data, email: e.target.value})}/>
        <select name="" id="" className="select" 
        onChange={(e) => setData({...data, state: e.target.value})}>
          <option value={data.state} 
        hidden>State</option>
          {
            states.map((item) => {
              return (
                <option value={item.name}>
                  {item.name}
                </option>
              )
            })
          }
        </select>
        <input type="tel" 
        placeholder="Phone Number"
        value={data.phone_number}
        onChange={(e) => setData({...data, phone_number: e.target.value})}

        />
        <input type="number" 
        placeholder="NIN"
        value={data.nin}
        onChange={(e) => setData({...data, nin: e.target.value})}
        />
      </form>
    </div>
  );
}

export default PersonalInformation;
