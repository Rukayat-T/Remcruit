import React, { useState } from "react";
import CityData from "./CityData.json";

function Testing() {
  const [state, setState] = useState('--State--');
  const [city, setCity] = useState('--City--');
  const [cities, setCities] = useState([]);
  const changeStateHandler = (e) => {
    setState(e.target.value);
    setCities(CityData.find((state) => state.name === e.target.value).cities);
  }
  const changeCityHandler = (e) => {
    setCity(e.target.value);
  }

  return (
    <div>
      <h1>This page is for tests</h1>
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
        onChange={changeCityHandler}
      >
        <option value="">--City</option>
        {
          cities.map(city => (
            <option value={city}>{city}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Testing;
