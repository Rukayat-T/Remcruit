import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUpWideShort} from "@fortawesome/free-solid-svg-icons";


function FilterBar() {
  return (
    <div>
      <div className="specific-filter-bar">
        <div className="specific-filter-content">
           <div className="specific-job-search">
            <input type="search" name="" id="" className='title-place' placeholder='Job title, Company or Keywords'/>
            <input type="search" name="" id="" placeholder='City, State or Country'/>
            <input type="search" name="" id="" placeholder='Salary Range'/>
            <button className='filter-button'><FontAwesomeIcon icon={faArrowUpWideShort} style={{color: "#000000",}} /></button>
            <button type='button'>Search</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
