import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [company, setCompany] = useState(() =>
    localStorage.getItem("company") ? JSON.parse(localStorage.getItem("company")) : null
  );
  const [jobseeker, setJobSeeker] = useState(() =>
    localStorage.getItem("jobseeker") ? JSON.parse(localStorage.getItem("jobseeker")) : null
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.is_jobSeeker === true) {
        getJobSeeker(user.id);
      } else if (user.is_employer === true) {
        getEmployerCompany(user.id);
      }
    }
  }, [user]);

  const getEmployerCompany = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/employer/getEmployerByUserid/${id}/`);
      const resJson = await response.json();
      if (response.status === 200) {
        localStorage.setItem("company", JSON.stringify(resJson));
        setCompany(resJson);
        navigate("/dashboard");
      } else {
        console.log(resJson);
        alert("Something went wrong with getting the company details");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getJobSeeker = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/jobseekers/jobseekerbyuserid/${id}/`);
      const resJson = await response.json();
      if (response.status === 200) {
        localStorage.setItem("jobseeker", JSON.stringify(resJson));
        setJobSeeker(resJson);
        navigate("/home");
      } else {
        console.log(resJson);
        alert("Something went wrong with getting the job seeker details");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/authentication/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: e.target.username.value, password: e.target.password.value }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      alert("Something went wrong");
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    setCompany(null);
    setJobSeeker(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("company");
    localStorage.removeItem("jobseeker");
    navigate("/login");
  };

  const contextData = {
    user,
    company,
    getEmployerCompany,
    loginUser,
    logoutUser,
    jobseeker,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
