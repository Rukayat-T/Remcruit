
import { Link, useNavigate } from 'react-router-dom'
import './Registerpage2.css'
import "../../../pages/Login/Login.css";
import React, { useState, useEffect } from 'react'

import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterForm1 from "../../components/RegisterForm/RegisterForm";

function Registerpage2() {
    const navigate = useNavigate()

    const [page, setPage] = useState(0)
    const handlePage1 = () => {
        setPage(0)
      }

    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
        gender: "",
        terms_and_conditions: "",
        phone_number: ""
        
      })
      const checkboxHandler = (e) => {
        setFormData({ ...formData, terms_and_conditions: "True" })
    }
     
      

    // useEffect(() => {
    
        // const subBtn = document.getElementById('submit')
        // if (page === 0) {
        //   subBtn.style.display = 'inline-block'
            
        // }
        // else {
        //   subBtn.style.display = 'none'
            
        // }
    // })

    const pageDisplay = () => {
        if (page === 0) {
          return <RegisterForm formData={formData} setFormData={setFormData} onSubmit={handleSubmit} onChange={onChange} />
        }
        
    }

    

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        localStorage.setItem("data",JSON.stringify(formData))
        navigate('/jobseeker/registerpage3')
     };

        // try {
        //   let res = await fetch("http://127.0.0.1:8000/authentication/register/jobseeker/",
          
        //     {
        //       method: "POST",
        //       headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify(formData),
        //     });
        //   let resJson = await res.json();
        //   if (res.status === 201) {
        //     console.log(resJson)
        //     navigate('/jobseeker')
        //   } else {
        //     console.log(resJson)
        //     alert("something went wrong")
        //   }
        // } catch (err) {
        //   console.log(err);
        // }

      


  return (
    <div className="register2-main-container"> 
        
      <div className="register2-main-container">

      <div className="right-container">
          <div className="register-text">
            <h1>
            Looking to start your career?
            </h1>

            <h3>We’ve got your back</h3>

            <p>Browse through thousands of job listings, companies, organisations and internships. Start creating 
               connections with companies now.</p>
          </div>
          
        </div>




        <div className="left-container">
          <div className="left-container-content">

          <div className="account">
                <div className='pages'>
                  <div className={page === 0 ? "active" : ""} onClick={handlePage1} id='pageOne'> </div>
            </div>
            </div>
            <div className='info'>
                  <p className={page === 0 ? "active" : ""} onClick={handlePage1} id='T'>Account details</p>
                  
                </div>

             <div className="register">
             <form onSubmit={handleSubmit}>
            
                <div className="name">
                    <div className="firstName">
                        <label>First Name*</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.first_name}
                            onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                            placeholder='Firstname' />
                    </div>
                    <div className="lastName">
                        <label>Last Name*</label>
                        <input
                            type="text"
                            name="lastname"
                            value={formData.last_name}
                            onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                            placeholder='Lastname' />
                    </div>
                </div>
                <div className="gend">
                    <div className='gen'>
                        <label>Gender*</label>
                        <div className='gender'>
                            <div className='fem'>
                                <input
                                    type="radio"
                                    name="female"
                                    value="Female"
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                    checked={formData.gender === "Female"}
                                /> Female
                            </div>
                            <div className='mal'>
                                <input
                                    type="radio"
                                    name="male"
                                    value="Male"
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                    checked={formData.gender === "Male"}
                                /> Male
                            </div>
                        </div>
                    </div>
                  
    
                </div>
                <div className="phone">
    
                    <div className="email">
                        <label>Email*</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder='email' />
                    </div>
                    <div className="phoneNo">
                        <label>Phone Number*</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phone_number}
                            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                            placeholder='' />
                    </div>
                </div>
                <div className="pass">
                    <div className="password">
                        <label>Password*</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    </div>
                    <div className="confPassword">
                        <label>Confirm Password*</label>
                        <input
                            type="password"
                            name="password2"
                            value={formData.password2}
                            onChange={(e) => setFormData({ ...formData, password2: e.target.value })} />
                    </div>
                </div>
  
                <div className="termsAndConditions">
                  <label>Terms and Conditions</label>
                  <input
                      type="checkbox"
                      name="terms"
                      value="False"
                      onChange={checkboxHandler}
                  // 
                  />
                  I accept the Terms and Conditions and Privacy Policy
              </div>
              <div className="continue">
                <button>
                    Continue
                </button>

            </div>
             </form>
            </div> 

           
          </div>
        
        </div>
        
        <div className="outlet">
                  <div className="forms">
                    {/* <form onSubmit={handleSubmit}> */}
                      {/* {pageDisplay()} */}
                      {/* <input type="submit" value="Register" id="submit" /> */}
                    {/* </form> */}
                  </div>
                </div>
      </div>
    </div>
  );
}

export default Registerpage2;
