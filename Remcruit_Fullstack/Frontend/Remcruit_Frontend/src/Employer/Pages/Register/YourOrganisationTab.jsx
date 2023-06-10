import React, { useState } from "react";
import "./YourOrganisationStyles.css";
import CityData from '../../../data/CityData.json'

function YourOrganisationTab({ formData, setFormData }) {
  const [state, setState] = useState("--State--");
  const [city, setCity] = useState("--City--");
  const [cities, setCities] = useState([]);
  
//   const changeStateHandler = (e) => {
//     setFormData({ ...formData, state: e.target.value })}
//     setCities(CityData.find((state) => state.name === e.target.value).cities);
//   };
console.log(formData);2

//   const changeCityHandler = (e) => {
//     setCity(e.target.value);
//   };
    return (
    <>
      <div className="organisationName">
        <label>Organisation Name*</label>
        <input
          type="text"
          name="OrgName"
          value={formData.organisation_name}
          onChange={(e) =>
            setFormData({ ...formData, organisation_name: e.target.value })
          }
        />
      </div>

      <label>Office Address*</label>
      <div className="address">
        <textarea
          type="text"
          name="address"
          value={formData.office_address}
          onChange={(e) =>
            setFormData({ ...formData, office_address: e.target.value })
          }
        />
        {/* <input type="text" name="street" placeholder='Street' />
                <input type="text" name="city" placeholder='City' />
                <input type="text" name="state" placeholder='State' />
                <input type="text" name="postcode" placeholder='Postcode' /> */}
      </div>

      <select
        name=""
        id=""
        value={state}
        onChange={changeStateHandler}
      >
        <option value="">--State--</option>
        {
          CityData.map(state => (
            <option value={state.name}>{state.name}</option>
          ))
        }
      </select>
      <br />
      <select
        name=""
        id=""
        value={city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      >
        <option value="">--City</option>
        {
          cities.map(city => (
            <option value={city}>{city}</option>
          ))
        }
      </select>


      <label>Office City</label>
      <div className="city">
        <textarea
          type="text"
          name="city"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>
      <label>Office State</label>
      <div className="state">
        <textarea
          type="text"
          name="state"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        />
      </div>
      <div className="organisationDesc">
        <label>Organisation Description*</label>
        <textarea
          type="text"
          name="OrgDesc"
          value={formData.organisation_description}
          onChange={(e) =>
            setFormData({
              ...formData,
              organisation_description: e.target.value,
            })
          }
        />
        <p>2000 characters max, 50 characters min</p>
      </div>
      <div className="more">
        <div className="website">
          <label>Organisation Website</label>
          <input
            type="text"
            name="firstname"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
            placeholder="company.com"
          />
        </div>
        <div className="employees">
          <label>Number of employees*</label>
          <input
            type="number"
            name="employees"
            value={formData.employees}
            onChange={(e) =>
              setFormData({ ...formData, employees: e.target.value })
            }
          />
        </div>
      </div>
      <div className="more">
        <div className="recruitmentAgency">
          <label>Are you a recruitment Agency?*</label>
          <input
            type="radio"
            name="yes"
            value="True"
            onChange={(e) =>
              setFormData({ ...formData, recruitment_agency: e.target.value })
            }
            checked={formData.recruitment_agency === "True"}
          />{" "}
          Yes
          <input
            type="radio"
            name="no"
            value="False"
            onChange={(e) =>
              setFormData({ ...formData, recruitment_agency: e.target.value })
            }
            checked={formData.recruitment_agency === "False"}
          />{" "}
          No
        </div>
        <div className="industry">
          <label>Primary Industry*</label>
          <input
            type="text"
            name="employees"
            value={formData.industry}
            onChange={(e) =>
              setFormData({ ...formData, industry: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
}
export default YourOrganisationTab;
