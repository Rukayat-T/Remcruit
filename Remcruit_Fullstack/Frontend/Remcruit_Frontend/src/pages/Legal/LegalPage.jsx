import React, { useState } from 'react';
import  './TermStyle.css'
// import './TermsAndConditions.css';

// function terms() {
//   return (
//     <div className="terms-and-conditions-container">
//       <h1>Terms and Conditions</h1>
//       <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [company name]'s relationship with you in relation to this website.</p>
//       //Add the rest of the terms and conditions content here
//     </div>
//   );
// }

// export default terms;



function Legal(props) {
    const [showDetails, setShowDetails] = useState(false);
    
    const toggleDetails = () => {
      setShowDetails(!showDetails);
    }
    
    return (
      <div className="summary-container">
        <h2>{props.title}</h2>
        <p>{props.summary}</p>
        {showDetails ? <p>{props.details}</p> : null}
        <button onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Read more'}</button>
      </div>
    );
  }
  
  export default Legal;
