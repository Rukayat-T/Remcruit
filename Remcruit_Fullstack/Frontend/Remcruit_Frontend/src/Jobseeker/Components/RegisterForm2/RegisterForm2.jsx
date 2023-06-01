import React from 'react'


function RegisterForm2({formData, setFormData }) {
    
    
  const [role_type, setrole_type] = React.useState("");
  const [industry, setindustry] = React.useState("");
 
 
  const handlerole_type= (event) => {
 
     setrole_type(event.target.value);
     console.log(event.tareget.value)
     console.log(role_type)
  };
 
  const handleindustry = (event) => {
 
     setindustry(event.target.value);
     console.log(event.tareget.value)
     console.log(industry)
  };
 
  
  const Dropdown = ({ label, value, options, onChange }) => {

    return (
       
      <>
      <label> {label} </label>

        <select value={value} onChange={onChange}>
   
          {options.map((option) => (
   
            <option value={option.value}>{option.label}</option>
   
          ))}
        </select>
        </>
    );
}


return (
  <>
  <div className="careerprefrece">
  <h3>Career Prefrence</h3>
    <div className="universityinfo">
   <Dropdown

label="Job Type"

options={[
{ label: '', value: '' },

{ label:'Full Time' , value: 'FULL_TIME' },

{ label:'Part Time' , value: 'PART_TIME' },

{ label: 'Internship', value: 'INTERNSHIP' },



]}

value={formData.role_type}

onChange={(e) => setFormData({...formData, role_type: e.target.value})}

/>
</div>

<div className="universityinfo">

<Dropdown

label="Industry"

options={[
{ label: '', value: '' },


{ label: 'Accountancy, banking and finance', value: 'ACOUNTANCY_BANKING_FINANCE' },

{ label: 'Business, consulting and management', value: 'BCM' },

{ label: 'Charity and voluntary work', value: 'CVW' },

{ label: 'Consumer goods and retail', value: 'CGR' },

{ label: 'Energy and Utilities', value: 'EU' },

]}

value={formData.industry}

onChange={(e) => setFormData({...formData, industry: e.target.value})}

/>
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
