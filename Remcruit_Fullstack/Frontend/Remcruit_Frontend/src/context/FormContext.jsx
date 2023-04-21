import React, {createContext, useContext, useEffect, useState} from 'react'
import PersonalInformation from '../Jobseeker/Pages/JobApplication/components/PersonalInformation'
import CVUpload from '../Jobseeker/Pages/JobApplication/components/CVUpload'
import EmployerQuestions from '../Jobseeker/Pages/JobApplication/components/EmployerQuestions'
import { useNavigate } from 'react-router'
import AuthContext from './AuthContext'

const FormContext = createContext()
export default FormContext

export const FormProvider = ({ children }) => {
    const [page, setPage] = useState(0)
    const navigate = useNavigate()

    const next = () => {
      setPage((currentPage) => currentPage + 1)
    }

    const back = () => {
      setPage((currentPage) => currentPage - 1)
    }

    const submitbtn = () => {
      return (
        <button type="submit" onClick={
          () => {
            if (page == FormTitles.length - 1)
            navigate("/home")
          }
        }>Submit</button>
      )
    }
    const nextbtn = () => {
      return (
        <button
                type="button"
                onClick={next}
                disabled={page == FormTitles.length - 1}
                id="continuebtn"
              >Next</button>
      )
    }

    const FormTitles = [
      "Personal Info",
      "Upload CV",
      "Employer Questions"
    ];

    const PageDisplay = () => {
      if (page === 0){
        return <PersonalInformation data={data} setData={setData}/>
      }
      else if (page === 1){
        return <CVUpload/>
      }
      else {
        return <EmployerQuestions/>
      }
    }
    
    
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        state: "",
        phone_number: "",
        nin:"",
        cv:"",
        // validLicence: false,
        // job_title: "",
        // company:"",
    })

    

    let contextData = {
      page: page,
      setPage: setPage,
      next: next,
      back: back,
      FormTitles: FormTitles,
      PageDisplay: PageDisplay,
      data: data,
      setData: setData,
      submitbtn:submitbtn,
      nextbtn:nextbtn,

  }

  return (
    <FormContext.Provider value={contextData} >
        {children}
    </FormContext.Provider>
  )
}


