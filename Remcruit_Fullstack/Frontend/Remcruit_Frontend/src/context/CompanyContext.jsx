import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const CompanyContext = createContext()
export default CompanyContext


export const CompanyProvider = ({ children }) => {
    let [company, setCompany] = useState([])
    let { user } = useContext(AuthContext)
    const navigate = useNavigate()

    let thecompany = async (e) => {
        // e.preventDefault()
        let response = await fetch(
            `http://127.0.0.1:8000/employer/getEmployerByUserid/${user.id}/`
        ).then((response) => response.json());
        setCompany(response)
        // console.log(response)
    }

    let contextData = {
        company: company,
        thecompany: thecompany,
    }

    return (
        <CompanyContext.Provider value={contextData}>
            {children}
        </CompanyContext.Provider>
    )
}
