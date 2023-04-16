import React, {useContext, createContext, useState, useEffect} from 'react'

const FormContext = createContext({})



export function FormProvider({children}) {
    const title = {
        0: 'Personal Information',
        1: 'Upload CV',
        2: 'Employer Questions'
    }
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        state: "",
        phone_number: 0,
        nin:"",
        cv:"",
        validLicence:"",
        job_title: "",
        company:"",
    })
    const handleChange = e => {
      const type = e.target.type
      const name = e.target.name
      const value = type === "checkbox" ? e.target.checked : e.target.value

      setData(prevData => ({...prevData, [name]: value}))
    }

    const {
        nin,
        job_title,
        company, 
        ...requiredFields} = data
    
    const canSubmit = [...Object.values(requiredFields)].every(Boolean) && page === Object.keys(title).length - 1
        
  return (
    <FormContext.Provider value={{page, setPage, data, setData, canSubmit}} >
        {children}
    </FormContext.Provider>
  )
}

export default FormContext
