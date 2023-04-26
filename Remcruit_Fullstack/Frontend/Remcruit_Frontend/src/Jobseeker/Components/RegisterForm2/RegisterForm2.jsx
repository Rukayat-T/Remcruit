import React from 'react'


function RegisterForm2({}) {
    
    
    
  
      return (
          <>
          
           
              <div className="carrer">
                <div className="jobtype">
              <label>
                     Tell us your Job sectors you are intrested in so we can personalise your feed with
                       advice and opportunities that are most important to you.  </label>
                        <input 
                        type="text" 
                        // value={formData.job_types}
                        // onChange={(e) => setFormData({ ...formData, job_types: e.target.value })}
                        placeholder='eg. Environment and Agriculture,   Accountancy'/>
                        
                         </div>

                       

                         <div className="industry">


                         <label>
                         Let us know what types of roles you're considering so we can keep
                          you updated with the latest relevant opportunities.  </label>
                        <input
                         type="text"
                        //  value={formData.sector_industry}
                        //  onChange={(e) => setFormData({ ...formData, sector_industry: e.target.value })}
                        placeholder='eg. Full-time,  Graduate' />
                        
                         </div>
              </div>

              </>
      )
  }
  export default RegisterForm2

              






















// import React from 'react';

// const RadioInput = ({label, value, checked, setter, }) => {
// 	return (
// 	  <label>
// 	    <input type="radio" checked={checked == value}
// 	           onChange={() => setter(value)} />
// 	    <span>{label}</span>
// 	  </label>
// 	);
// };
   
// const RegisterForm2 = props => {
// 	const [Jobtype, setJobtype] = React.useState();
// 	const [industry, setindustry] = React.useState();
	
// 	return (
// 	  <>
//       <div className="career">
// 	    <div className='jobtype'>
// 	      <label>Select the opportunity types you’re interested in
//                  Let us know what types of roles you're considering so we can keep
//                  you updated with the latest relevant opportunities.</label>
// 	      <RadioInput label="Full-time" value="Full-time" checked={Jobtype} setter={setJobtype}  />
//           <RadioInput label="Part-time" value="Part-time" checked={Jobtype} setter={setJobtype} />
// 	      <RadioInput label="Freelance" value="Freelance" checked={Jobtype} setter={setJobtype} />
//           <RadioInput label="Permanent" value="Permanent" checked={Jobtype} setter={setJobtype} />
//           <RadioInput label="Fixed-term Contract" value="Fixed-term Contract" checked={Jobtype} setter={setJobtype} />
//           <RadioInput label="Temporary" value="Temporary" checked={Jobtype} setter={setJobtype} />
// 	    </div>
        
// 	    <div className='industry'>
// 	      <label>Select the industry sectors you’re interested in
//                 Tell us your sectors of interest so we can personalise your feed with
//                   advice and opportunities that are most important to you. </label>
// 	      <RadioInput label="finance" value="finance" checked={industry} setter={setindustry} />
// 	      <RadioInput label="Entertainment " value="Entertainment " checked={industry} setter={setindustry}  />
//           <RadioInput label="Energy " value="Energy " checked={industry} setter={setindustry}  />
//           <RadioInput label="Agriculture" value="Agriculture" checked={industry} setter={setindustry}  />
         
// 	    </div>
// 	    </div>
// 	  </>
// 	);
// };

// export default RegisterForm2;
