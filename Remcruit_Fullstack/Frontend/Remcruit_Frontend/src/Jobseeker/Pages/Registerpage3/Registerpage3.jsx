
import RegisterForm1 from "../../components/RegisterForm/RegisterForm";
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import '../Registerpage2/Registerpage2/'


const Registerpage3 =  () => {
    

    const navigate = useNavigate()

    const [page, setPage] = useState(0)
    const handlePage2 = () => {
        setPage(1)
      }

      const [formData, setFormData] = useState({
        university_name: "",
        SUBJECT_OF_STUDY_CHOICES: "",
        YEAR_OF_GRADUATION_CHOICES: "",
        DEGREE_CLASSIFICATION_CHOICE: "",
        HIGHEST_QUALIFICATION_CHOICES: "",
       
        
      })
      

      
        const Dropdown = ({ label, value, options, onChange }) => {

            return (
           
              <label>
           
                {label}
           
                <select value={value} onChange={onChange}>
           
                  {options.map((option) => (
           
                    <option value={option.value}>{option.label}</option>
           
                  ))}
           
                </select>
           
              </label>
           
            );
      }
 const [university_name, setuniversity_name] = React.useState("");
 const [SUBJECT_OF_STUDY_CHOICES, setSUBJECT_OF_STUDY_CHOICES] = React.useState("");
 const [YEAR_OF_GRADUATION_CHOICES, setYEAR_OF_GRADUATION_CHOICES] = React.useState("");
const [DEGREE_CLASSIFICATION_CHOICE, setDEGREE_CLASSIFICATION_CHOICE] = React.useState("");

 const handleuniversity_name= (event) => {

    setuniversity_name(event.target.value);

 };

 const handleSUBJECT_OF_STUDY_CHOICES = (event) => {

    setSUBJECT_OF_STUDY_CHOICES(event.target.value);

 };

 const handleYEAR_OF_GRADUATION_CHOICES = (event) => {

    setYEAR_OF_GRADUATION_CHOICES(event.target.value);

 };


 const handleDEGREE_CLASSIFICATION_CHOICE = (event) => {

    setDEGREE_CLASSIFICATION_CHOICE(event.target.value);

 };


 const pageDisplay = () => {
    if (page === 1) {
      return <RegisterForm1 formData={formData} setFormData={setFormData} onSubmit={handleSubmit} onChange={onChange} />
    }
    
}

 let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    localStorage.getItem("data",JSON.stringify(formData))
    navigate('/home')
 

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
};

 return (

    

   <div>
      
        
        <div className="register3-main-container">
  
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
     <div className="account">
                <div className='pages'>
                  <div className={page === 1 ? "active" : ""} onClick={handlePage2} id='pagetwo'> studydetails</div>
            </div>
            </div>
            <div className='info'>
                  <p className={page === 1? "active" : ""} onClick={handlePage2} id='S'>studydetails</p>
                  
                </div>

     <Dropdown

       label="University name"

       options={[
        { label:'' , value: '' },

         { label:'Babcock University' , value: 'BABCOCK_UNIVERSITY' },

         { label: 'Unilag', value: 'UNILAG' },

         { label: 'Afe Babalola University Ado-Ekiti', value: 'ABUAD' },

         { label:'Bowen' , value: 'BOWEN' },


       ]}

       value={university_name}

       onChange={handleuniversity_name}

     />

     <Dropdown

       label="Subject of study"

       options={[
        { label: '', value: '' },


         { label: 'Computer Science', value: 'COMPUTER_SCIENCE' },

         { label: 'Petroleum Engineering', value: 'PETROLEUM_ENGINEERING' },

         { label: 'Pharmacy', value: 'PHARMACY' },

         { label: 'Economics', value: 'ECONOMICS' },

         { label: 'Law', value: 'LAW' },

       ]}

       value={SUBJECT_OF_STUDY_CHOICES}

       onChange={handleSUBJECT_OF_STUDY_CHOICES}

     />

    <Dropdown

      label="Year of graduation"

      options={[
        { label: '', value: '' },

        { label: '2017', value: '2017' },

        { label: '2018', value: '2018' },

        { label: '2019', value: '2019' },

        { label: '2020', value: '2020' },

        { label: '2021', value: '2021' },

        ]}

        value={YEAR_OF_GRADUATION_CHOICES}

        onChange={handleYEAR_OF_GRADUATION_CHOICES}

     />


    <Dropdown

      label="Degree classification"

      options={[
        { label: '', value: '' },

       { label: 'First Class Honours', value: 'FIRST' },

       { label: 'Second Class Honours(upper)', value: 'SECOND_UPPER' },

       { label: 'Second Class Honours(lower)', value: 'SECOND_LOWER' },

       { label: 'Third Class Honours', value: 'THIRD' },

       ]}

      value={DEGREE_CLASSIFICATION_CHOICE}

      onChange={handleDEGREE_CLASSIFICATION_CHOICE}

     />


 <div className="type">
                    <div className="Qualificationtype">
                    <label>Qualification type</label>
                          <input
                        type="radio"
                        name="Undergraduate"
                        value="Undergraduate"
                        onChange={(e) => setFormData({ ...formData,HIGHEST_QUALIFICATION_CHOICES: e.target.value })}
                        checked={formData.HIGHEST_QUALIFICATION_CHOICES === "Undergraduate"}
                        /> Undergraduate
                     <input
                        type="radio"
                        name="POSTGRADUATE(Research)"
                        value="POSTGRADUATE"
                        onChange={(e) => setFormData({ ...formData, HIGHEST_QUALIFICATION_CHOICES: e.target.value })}
                        checked={formData.HIGHEST_QUALIFICATION_CHOICES === "POSTGRADUATE"}
                        /> POSTGRADUATE(Research)
                    <input
                        type="radio"
                        name="POSTGRADUATE(Tought)"
                        value="POSTGRATUATE"
                        onChange={(e) => setFormData({ ...formData, HIGHEST_QUALIFICATION_CHOICES: e.target.value })}
                        checked={formData.HIGHEST_QUALIFICATION_CHOICES=== "POSTGRADUATE(Tought)"} /> POSTGRADUATE(Tought)
                </div>
                
            </div> 

           
        
            <div className="continue">
                <button>
                    Continue
                </button>

                </div>

   </div>
   </div>

 );

};

export default Registerpage3






// import React from "react";
// import { Link } from 'react-router-dom'
// // import './Registerpage2.css'


// import RegisterForm1 from "../../components/RegisterForm1/RegisterForm1";

// const RegisterPage3 = () => {
//     return <>
//     return (
//       <form>
//         <select value={university_name} onChange={handleChange}>
//           <option value="UNILAG">Unilag</option>
//           <option value="UNIBEN">UNIBEN</option>
//           <option value="ABUAD">ABUAD</option>
//           <option value="YABATECH">YABATECH</option>
//           <option value="BOWEN">BOWEN</option>
//         </select>

//         <select value={SUBJECT_OF_STUDY_CHOICES} onChange={handleChange}>
//           <option value="COMPUTER_SCIENCE">Computer Science</option>
//           <option value="PETROLEUM_ENGINEERING">Petroleum Engineering</option>
//           <option value="PHARMACY">Pharmacy</option>
//           <option value="ECONOMICS">Economics</option>
//           <option value="LAW">Law</option>
//         </select>

//         <select value={YEAR_OF_GRADUATION_CHOICES} onChange={handleChange}>
//           <option value="2017">2017</option>
//           <option value="2018">2018</option>
//           <option value="2019">2019</option>
//           <option value="2020">2020</option>
//           <option value="2021">2021</option>
//         </select>



//         <select value={ DEGREE_CLASSIFICATION_CHOICE} onChange={handleChange}>
//           <option value="FIRST">First Class Honours</option>
//           <option value="SECOND_UPPER">Second Class Honours(upper)</option>
//           <option value="SECOND_LOWER">Second Class Honours(lower)</option>
//           <option value="THIRD">Third Class Honours</option>
          
//         </select>
//       </form>
//     )
  
    
    
    
    
    
//     </>
                
//  }
 
//  export default RegisterPage3







// // function Registerpage3() {
// //   return (
// //     <div> 
        
// //       <div className="register2-main-container">

// //       <div className="right-container">
// //           <div className="register-text">
// //             <h1>
// //             Looking to start your career?
// //             </h1>

// //             <h3>We’ve got your back</h3>

// //             <p>Browse through thousands of job listings, companies, organisations and internships. Start creating 
// //                connections with companies now.</p>
// //           </div>
          
// //         </div>




// //         <div className="left-container">
// //           <div className="left-container-content">
            

// //             <div className="register">
// //             <RegisterForm1/>
// //             </div>


           
// //             <div className="continue">
// //             <Link to="/registerpage2">Continue</Link>

// //             </div>

           
// //           </div>
// //         </div>
        
// //       </div>
// //     </div>
// //   );
// // }

// // export default Registerpage3;
