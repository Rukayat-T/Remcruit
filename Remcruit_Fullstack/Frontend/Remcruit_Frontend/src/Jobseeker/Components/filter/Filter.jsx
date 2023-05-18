import React from 'react'
import './filter.css'
import FilterBySalary from "./FilterBySalary"
import FilterByAvailability from "./FilterByAvailability"
// import FilterByRole from "./FilterByRole";
function Filter() {
    return (
        <div className='filter'>filter
        <FilterBySalary />
        <FilterByAvailability />
        </div>
    )
}

export default Filter