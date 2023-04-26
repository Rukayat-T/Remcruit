import React from 'react'
import './RegisterForm1.css'


function RegisterForm1({ formData, setFormData  }) {
    const [university_name, setuniversity_name] = React.useState("");
    const [subject_of_study, setsubject_of_study] = React.useState("");
    const [year_of_graduation, setyear_of_graduation] = React.useState("");
   const [degree_classification, setdegree_classification] = React.useState("");
   
    const handleuniversity_name= (event) => {
   
       setuniversity_name(event.target.value);
   
    };
   
    const handlesubject_of_study = (event) => {
   
       setsubject_of_study(event.target.value);
   
    };
   
    const handleyear_of_graduation = (event) => {
   
       setyear_of_graduation(event.target.value);
   
    };
   
   
    const handledegree_classification = (event) => {
   
       setdegree_classification(event.target.value);
   
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
    <div className="studydetails">
      <div className="universitynames">
     <Dropdown

label="University name"

options={[
{ label:'' , value: '' },

{ label:'Babcock University' , value: 'BABCOCK_UNIVERSITY' },

{ label: 'Unilag', value: 'UNILAG' },

{ label: 'Afe Babalola University Ado-Ekiti', value: 'ABUAD' },

{ label:'Bowen' , value: 'BOWEN' },


]}

value={formData.university_name}

onChange={(e) => setFormData({...formData, university_name: e.target.value})}

/>
</div>

<div className="universitynames">

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

value={formData.subject_of_study}

onChange={(e) => setFormData({...formData, subject_of_study: e.target.value})}

/>
</div>

<div className="universitynames">

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

value={formData.year_of_graduation}

onChange={(e)=> setFormData({...formData, year_of_graduation:e.target.value})}

/>
</div>

<div className="universitynames">
<Dropdown

label="Degree classification"

options={[
{ label: '', value: '' },

{ label: 'First Class Honours', value: 'FIRST' },

{ label: 'Second Class Honours(upper)', value: 'SECOND_UPPER' },

{ label: 'Second Class Honours(lower)', value: 'SECOND_LOWER' },

{ label: 'Third Class Honours', value: 'THIRD' },

]}

value={formData.degree_classification}

onChange={(e)=>setFormData({...formData, degree_classification:e.target.value})}

      
/> 
</div>
       
</div>
       
      
<div className="type">
              <div className="Qualificationtype">
              <label>Qualification type</label>
                <div className="radios">

              
                    <input
                  type="radio"
                  name="UNDERGRADUATE"
                  value="UNDERGRADUATE"
                  onChange={(e) => setFormData({ ...formData,highest_qualification: e.target.value })}
                  checked={formData.highest_qualification === "UNDERGRADUATE"}
                  /> Undergraduate
                  </div>
                  <div className="radios">
               <input
                  type="radio"
                  name="POSTGRADUATE(R)"
                  value="POSTGRADUATE(R)"
                  onChange={(e) => setFormData({ ...formData, highest_qualification: e.target.value })}
                  checked={formData.highest_qualification === "POSTGRADUATE(R)"}
                  /> POSTGRADUATE(Research)
                  </div>

                  <div className="radios">
              <input
                  type="radio"
                  name="POSTGRADUATE(T)"
                  value="POSTGRADUATE(T)"
                  onChange={(e) => setFormData({ ...formData, highest_qualification: e.target.value })}
                  checked={formData.highest_qualification=== "POSTGRADUATE(T)"} /> POSTGRADUATE(Tought)
                  </div>
          </div>
          
      </div> 
      
    </>
)
}
export default RegisterForm1
