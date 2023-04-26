import React from 'react';
import Vector from "../Forgotpassword/static/Vector.png";
import  "./static/forgotpassword.css";
import { faArrowLeft, faArrowRightArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Forgotpassword(){
  // const navigate = useNavigate()

  // const nextPage = () => {
  //   setPage((current)=>current + 1)
  // }
  // const goBack = () => {
  //   navigate(-1);
  // }
  
  
  // const prevPage = () => {
  //   if ( page === 1) {
  //     setPage(page - 1)
  //   }
  //   else {
  //     goBack()
  //   }
  // }
  return(
 

 <div className="forgotpassword-main">

        <img
          src={Vector}
          alt=""
        />

        
        <div class="form-container">
       
        <form action="#" method="POST" >
            <h2> Forgot Password? </h2>
            <p>Don’t worry it happens. Please enter the email address associated with your account</p>
           
            <div class="form-box">
            
                      <label></label>
                      <input
                          type="text"
                          name="email"
                          
                          placeholder='Email address' />
                 
                
            </div>
           
            <div class="form-submit">
                <input type="submit" value="Reset Password"/>
            </div>

            <div className="back">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to log in
            </div>

            {/* <div className="backBtn" onClick={prevPage}>
               <FontAwesomeIcon icon={faChevronLeft} className="backIcon" />
               back
              </div> */}

        </form>
    </div>
        </div>
 
  )
};

export default Forgotpassword;






















// import React, { Component } from "react";
// import { forgotpassword } from '.';


//  handleSubmit = e => {
//   e.preventDefault();
//  };




//   render(){
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h3>Forgot Password</h3>

//         <div className="form-group">
//           <label> Email </label>
//           <input type="email" className="form-control" placeholder="Email"
//         </div>
//       </form>
//     )
//   }
// }


 // const [email, setEmail] = useState('');
  // const [isResetSent, setIsResetSent] = useState(false);

  // // const handleResetPassword = () => {
  // //   // Implement your reset password logic here, e.g. sending a reset password link to the email

  // //   // Set isResetSent to true after successful reset password request
  // //   setIsResetSent(true);
  // // };

  // return (
  //   <div>
  //     <h1>Forgot Password</h1>
  //     {isResetSent ? (
  //       <p>Reset password link sent to your email!</p>
  //     ) : (
  //       <form>
  //         <label>
  //           Email:
  //           <input
  //             type="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //         </label>
  //         <button type="button" onClick={handleResetPassword}>
  //           Reset Password
  //         </button>
  //       </form>
  //     )}
  //   </div>
  // );
