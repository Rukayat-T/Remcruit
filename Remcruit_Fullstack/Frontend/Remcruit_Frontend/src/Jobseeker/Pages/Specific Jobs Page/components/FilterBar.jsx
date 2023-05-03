import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";


function FilterBar({ getisSearch, getSearchValue }) {

  const [isSearch, setIsSearch] = useState(false)
  const [searchValue, setsearchValue] = useState()



  const handleSearch = (value) => {
    // searchFunction(value)
    //console.log(value)
    // searchFunction(value)
    // setsearchValue("")
    getisSearch(isSearch)
    getSearchValue(searchValue)
  }
  // getisSearch(isSearch)
  // getSearchValue(searchValue)

  return (
    <div>
      {/* <div className="specific-filter-bar">
        <div className="specific-filter-content">
          <div className="specific-job-search">
            <input
              type="search"
              name=""
              id=""
              className='title-place'
              placeholder='Job title, Company or Keywords'
              value={searchValue}
              onChange={(e) => { setsearchValue(e.target.value) }}
              onClick={() => { setIsSearch(true) }} />
            <input type="search" name="" id="" placeholder='City, State or Country' />
            <input type="search" name="" id="" placeholder='Salary Range' />
            <button className='filter-button'><FontAwesomeIcon icon={faArrowUpWideShort} style={{ color: "#000000", }} /></button>
            <button type='button' onClick={() => { handleSearch(searchValue) }}>Search</button>
            {isSearch === true ? <button type='button' onClick={() => { setIsSearch(false); setsearchValue(""); }}>Cancel</button> : <></>}

          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FilterBar
