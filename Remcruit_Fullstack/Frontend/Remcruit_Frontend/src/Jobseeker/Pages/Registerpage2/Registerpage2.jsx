
import './Registerpage2.css'
import "../../../pages/Login/Login.css";
import Frame2 from '../../../assets/Frame2.svg';

// import RegisterForm1 from "../../components/RegisterForm/RegisterForm";
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// import '../Registerpage2/Registerpage2/'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterForm1 from "../../components/RegisterForm1/RegisterForm1";
import RegisterForm2 from '../../Components/RegisterForm2/RegisterForm2';

function Registerpage2() {
  const [page, setPage] = useState(1)
    const navigate = useNavigate()

    const nextPage = () => {
      setPage((current)=>current + 1)
    }
    const goBack = () => {
      navigate(-1);
    }
    
    
    const prevPage = () => {
      if (page === 1 || page === 2) {
        setPage(page - 1)
      }
      else {
        goBack()
      }
    }
  
    
   

    

    
    

    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password2: "",
        gender: "",
        terms_and_conditions: "",
        phone_number: "",
        university_name: "",
        subject_of_study: "",
        year_of_graduation: "",
        degree_classification: "",
        highest_qualification: "",
        // sector_industry: "",
        // job_types: "",
       
        
        
      })
   

    const pageDisplay = () => {
        if (page === 0) {
          return <RegisterForm formData={formData} setFormData={setFormData} />
        }
        else if (page === 1) {
          return <RegisterForm1 formData={formData} setFormData={setFormData} />
        }
        else  {
          return <RegisterForm2  />
        }
        
    }

    

    let handleSubmitted = async (e) => {
        e.preventDefault();
       

        try {
          let res = await fetch("http://127.0.0.1:8000/authentication/register/jobseeker/",
          
            {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData),
            });
          let resJson = await res.json();
          if (res.status === 201) {
            console.log(resJson)
            navigate('/jobseeker')
          } else {
            console.log(resJson)
            alert("something went wrong")
          }
        } catch (err) {
          console.log(err);
        }
        console.log(formData)
      };
      


  return (
  <div className='main-register-container-jobseeker'>
    <div className='left-register-side'>
    <div className="registerion-text">
           <h1>
            Looking to start your career?
            </h1>

            <h3>We’ve got your back</h3>

           <p>Browse through thousands of job listings, companies, organisations and internships. Start creating 
              connections with companies now.</p>
         </div>
         {/* <div >
          <img src={Frame2} alt="Frame" className='frame' />

         </div> */}
         
    </div>
    <div className="right-register-side">
    <div className="backBtn" onClick={prevPage}>
               <FontAwesomeIcon icon={faChevronLeft} className="backIcon" style={{ color: "#CA61C3" }} />
               Back
              </div>
              
              
       
        
                <form onSubmit={handleSubmitted}>
                      {pageDisplay()}
                      {/* <input type="submit" value="Register" id="submit" />  */}


                     {/* {page===0 ? (<div className="nextBtn" onClick={nextPage} id="next">
                 <button className="buttons">Continue </button>
                 
                </div>):( <input type="submit" value="Register" id="submit" /> )}  */}

                {page===2 ? ( <input type="submit" value="Register" id="submit" /> ):
                (<div className="nextBtn" id="next">
                 <button className="buttons" onClick={nextPage} type='button'>Continue </button>
                 
                </div>)}

{/* {page !=(2)? Continue:submit} */}
                      {/* <div className="nextBtn" onClick={nextPage} id="next">
                  next
                  <FontAwesomeIcon icon={faChevronRight} className="nextIcon" />
                </div> */}

      </form>
    </div>
  </div>
  );
    }
   
        
      // <div className="register2-main-container">

      // <div className="rightside-container">
      //     <div className="registerion-text">
      //       <h1>
      //       Looking to start your career?
      //       </h1>

      //       <h3>We’ve got your back</h3>

      //       <p>Browse through thousands of job listings, companies, organisations and internships. Start creating 
      //          connections with companies now.</p>
      //     </div>
         
          
      //   </div>




      //   <div className="leftside-container">
      //     <div className="leftside-container-content">
      //     <div className="backBtn" onClick={prevPage}>
      //             <FontAwesomeIcon icon={faChevronLeft} className="backIcon" />
      //             back
      //           </div>

          <div className="accounts">
                {/* <div className='pages'>
                  <div className={page === 0 ? "actives" : ""} onClick={handlePage1} id='pageOne'> </div>
                  <div className={page === 1 ? "active" : ""} onClick={handlePage2} id='pageTwo'> </div>
            </div> */}
      //       </div>
      //       <div className='info'>
      //             <p className={page === 0 ? "actives" : ""}  id='T'>Account details</p>
      //             <p className={page === 1 ? "actives" : ""}  id='T'>Study Details</p>
                  
      //           </div>
      //            <div className="outlet"> 
      //             <div className="forms">
      //               <form onSubmit={handleSubmit}>
      //                 {pageDisplay()}
      //                 <input type="submit" value="Register" id="submit" />
      //               </form>
      //             </div>
      //           </div> 
      //           </div>
      //           </div>
      //       </div>
         
      
              
               
             

         
  // );
// }

 {/* <div className="continue">
                <button>
                    Continue
                </button> */}

export default Registerpage2;


{/* <div className="registeration">
<form onSubmit={handleSubmit}>

   <div className="name">
       <div className="first-Name">
           <label>First Name*</label>
           <input
               type="text"
               name="firstname"
               value={formData.first_name}
               onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
               placeholder='Firstname' />
       </div>
       <div className="last-Name">
           <label>Last Name*</label>
           <input
               type="text"
               name="lastname"
               value={formData.last_name}
               onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
               placeholder='Lastname' />
       </div>
   </div>
   <div className="gender">
       <div className='genders'>
           <label>Gender*</label>
           <div className='gender-der'>
               <div className='female'>
                   <input
                       type="radio"
                       name="female"
                       value="Female"
                       onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                       checked={formData.gender === "Female"}
                   /> Female
               </div>
               <div className='male'>
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
       <div className="phones">
    
    <div className="emails">
        <label>Email*</label>
        <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder='email' />
    </div>
    <div className="phoneNom">
        <label>Phone Number*</label>
        <input
            type="tel"
            name="phoneNumber"
            value={formData.phone_number}
            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
            placeholder='' />
    </div>
</div>
<div className="pass-word">
    <div className="passwords">
        <label>Password*</label>
        <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
    </div>
    <div className="confimPassword">
        <label>Confirm Password*</label>
        <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={(e) => setFormData({ ...formData, password2: e.target.value })} />
    </div>
</div>

<div className="terms-And-Conditions">
  <label>Terms and Conditions</label>
  <input
      type="checkbox"
      name="terms"
      value="False"
      onChange={checkboxHandler}
  // 
  />
  I accept the Terms and Conditions and Privacy Policy
</div> */}
