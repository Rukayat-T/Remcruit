import React from 'react'
import JobApplicationForm from './JobApplicationForm'
import StepOne from './StepOne/StepOne'
import StepTwo from './StepTwo/StepTwo'
import StepThree from './StepThree/StepThree'

function HandleFormInputs() {
  const {page} = JobApplicationForm()

  const display = {
    0: <StepOne/>,
    1: <StepTwo/>,
    2: <StepThree/>
  }

  const content = (
    <div className="content-display">
        {display[page]}
    </div>
  )

  return content
}

export default HandleFormInputs
