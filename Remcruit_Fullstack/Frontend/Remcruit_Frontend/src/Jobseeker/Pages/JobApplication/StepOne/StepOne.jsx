import React from 'react'
import JobApplicationForm from '../JobApplicationForm'


function StepOne() {
  const {data, handleChange} = JobApplicationForm()
  return (
    <div>
      <h1>This is the first step</h1>
    </div>
  )
}

export default StepOne
