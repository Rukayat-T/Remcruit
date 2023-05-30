import React, {createContext, useContext, useEffect, useState} from 'react'
import PersonalInformation from '../Jobseeker/Pages/JobApplication/components/PersonalInformation'
import CVUpload from '../Jobseeker/Pages/JobApplication/components/CVUpload'
import EmployerQuestions from '../Jobseeker/Pages/JobApplication/components/EmployerQuestions'
import { useNavigate } from 'react-router'
import AuthContext from './AuthContext'

const FormContext = createContext()
export default FormContext

export const FormProvider = ({ children }) => {
  let { user, jobseeker } = useContext(AuthContext)
  const [file, setFile] = useState("")
  const [fileData, setFileData] = useState('')
  const [fileName, setFileName] = useState("")
  const jobseekerID = jobseeker?.id

  const [data, setData] = useState({
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.username,
    state: jobseeker?.state,
    phone_number: jobseeker?.phone_number,
    nin:jobseeker?.nin,
    credential: '',
})

  useEffect(() => {
    const fetchCredential = async () => {
      const url = `http://127.0.0.1:8000/jobseekers/credential/byjobseeker/${jobseekerID}/`
      try{
        const response = await fetch(url, {
          method: 'GET',
        })
        const credential = await response.json() 
        setFileData(credential[0])
        setData({ ...data, credential: credential[0] })
        setFile(credential[0].credential)
        setFileName(credential[0].credential_name)
        // fileDownload(data[0].credential, fileName) 
      }
      catch(error) {
        console.log(error)
      }
    }
    if (jobseekerID) {
      fetchCredential()
    }
  }
  ,[jobseekerID])

    const [page, setPage] = useState(0)
    const navigate = useNavigate()
    

    const next = () => {
      setPage((currentPage) => currentPage + 1)
    }

    const back = () => {
      setPage((currentPage) => currentPage - 1)
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
        return <CVUpload data={data} setData={setData} fileData={fileData}/>
      }
      else {
        return <EmployerQuestions/>
      }
    }
    
    
    

    let contextData = {
      page: page,
      setPage: setPage,
      next: next,
      back: back,
      FormTitles: FormTitles,
      PageDisplay: PageDisplay,
      data: data,
      setData: setData,
      nextbtn:nextbtn,
      fileData: fileData,

  }

  return (
    <FormContext.Provider value={contextData} >
        {children}
    </FormContext.Provider>
  )
}


