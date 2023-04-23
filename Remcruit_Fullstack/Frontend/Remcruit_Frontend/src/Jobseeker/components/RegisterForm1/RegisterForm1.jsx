import React from 'react'


function RegisterForm1({ formData, setFormData  }) {
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


return (
    <>
     <Dropdown

label="University name"

options={[
{ label:'' , value: '' },

{ label:'Babcock University' , value: 'Babcock University' },

{ label: 'Unilag', value: 'University of Lagos' },

{ label: 'Afe Babalola University Ado-Ekiti', value: 'Afe Babalola University Ado-Ekiti' },

{ label:'Bowen' , value: 'Bowen University' },


]}

value={formData.university_name}

onChange={(e) => setFormData({...formData, university_name: e.target.value})}

/>

<Dropdown

label="Subject of study"

options={[
{ label: '', value: '' },


{ label: 'Computer Science', value: 'Computer Science' },

{ label: 'Petroleum Engineering', value: 'Petroleum Engineerin' },

{ label: 'Pharmacy', value: 'Pharmacy' },

{ label: 'Economics', value: 'Economics' },

{ label: 'Law', value: 'Law' },

]}

value={formData.SUBJECT_OF_STUDY_CHOICES}

onChange={(e) => setFormData({...formData, SUBJECT_OF_STUDY_CHOICES: e.target.value})}

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

value={formData.YEAR_OF_GRADUATION_CHOICES}

onChange={(e)=> setFormData({...formData, YEAR_OF_GRADUATION_CHOICES:e.target.value})}

/>


<Dropdown

label="Degree classification"

options={[
{ label: '', value: '' },

{ label: 'First Class Honours', value: 'First Class Honours' },

{ label: 'Second Class Honours(upper)', value: 'Second Class Honours(upper)' },

{ label: 'Second Class Honours(lower)', value: 'Second Class Honours(lower)' },

{ label: 'Third Class Honours', value: 'Third Class Honours' },

]}

value={formData.DEGREE_CLASSIFICATION_CHOICE}

onChange={(e)=>setFormData({...formData, DEGREE_CLASSIFICATION_CHOICE:e.target.value})}

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
      
    </>
)
}
export default RegisterForm1
