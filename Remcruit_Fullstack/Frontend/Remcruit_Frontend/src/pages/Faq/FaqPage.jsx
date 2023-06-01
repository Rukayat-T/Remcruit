import React from "react";
import Faq from "./Faq"
import Logo from '../../assets/fullLogo-cropped.svg'
import { Link } from 'react-router-dom'
import '../../components/Navbar/Navbar'

// import "../css/main.css";

// import "../scss/main.scss";

// import illustration__box from "../images/illustration-box-desktop.svg";
// import illustration__woman_desktop from "../images/illustration-woman-online-desktop.svg";
// import illustration__woman_mobile from "../images/illustration-woman-online-mobile.svg";

const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

const App = () => {
  return (
    
    <div className="container">
<nav className='employerNav'>
                <img src={Logo} alt="" srcSet="" className='empLogo' />
                <ul className='navMenu'>
                    
                    <li><Link to='/contactus' className='register'>Contact Us</Link></li>
                   
                </ul>
            </nav>
            <div className="search-div">
                <h1>
                Hi! How can we help you today?
                </h1>
                <div className="banner-search-bar">
        <input
            type="text"
            placeholder="Search FAQs..."
          />
        </div>

            </div>
            <div className="box-links">
                <div className="gettingstarted">
                    
                </div>
                <div className="JobSearchTips"></div>
                <div className="legalfaq"></div>


                
            </div>
      <div className="component">
       
        <Faq questionsAnswers={questionsAnswers} />
      </div>
     
    </div>
  );
};

export default App;