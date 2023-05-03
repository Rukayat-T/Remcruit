import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [company, setCompany] = useState(() => localStorage.getItem('company') ? JSON.parse(localStorage.getItem('company')) : null)
    let [jobseeker, setJobSeeker] = useState(() => localStorage.getItem('jobseeker') ? JSON.parse(localStorage.getItem('jobseeker')) : null)
    const navigate = useNavigate()

    let getEmployerCompany = async (id) => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/employer/getEmployerByUserid/${id}/`);
            let resJson = await response.json();
            if (response.status === 200) {
                localStorage.setItem('company', JSON.stringify(resJson));
                console.log(company, "company printed!")
                navigate('/dashboard')
            } else {
                console.log(resJson)
                alert("something went wrong with getting the company details")
            }
        } catch (error) {
            console.log(error)
        }
    }

    let getJobSeeker = async (id) => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/jobseekers/jobseekerbyuserid/${id}/`);
            let resJson = await response.json();
            if (response.status === 200) {
                localStorage.setItem('jobseeker', JSON.stringify(resJson));
                console.log(jobseeker, 'jobseeker printed')
                navigate('/home')
            }
            else {
                console.log(resJson)
                alert("Something with wrong with getting")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/authentication/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'username': e.target.username.value, "password": e.target.password.value })
        })
        let data = await response.json()
        // console.log(data)
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))

            if (user.is_jobSeeker === true) {
                getJobSeeker(user.id)
            }
            else if (user.is_employer === true) {
                getEmployerCompany(user.id);
            }
        }
        else {
            alert('something went wrong')
        }

        // if (user.is_jobSeeker === true) {
        //     getJobSeeker(user.id)
        // }
        // else if (user.is_employer === true) {
        //     getEmployerCompany(user.id);
        // }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        setCompany(null)
        setJobSeeker(null)
        localStorage.removeItem('authTokens')
        localStorage.removeItem('company')
        localStorage.removeItem('jobseeker')
        navigate('/login')
    }

    let contextData = {
        user: user,
        company: company,
        getEmployerCompany: getEmployerCompany,
        loginUser: loginUser,
        logoutUser: logoutUser,
        jobseeker: jobseeker
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
