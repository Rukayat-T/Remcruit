import React from "react";
import './Footer.css';
import Logo from '../../assets/footerlogo.svg'
import { useMediaQuery } from 'react-responsive'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    
    faFacebookSquare,
    faInstagram,
    faLinkedin, faYoutube,
    } from "@fortawesome/free-brands-svg-icons";
// import {
        
//       } from "@fortawesome/free-solid-svg-icons";


const Footer=()=>{

    
return(
<div className="footer">
  <form action=''>

    <div className="subcribe">
        <p>Subscribe To Our Newsletter</p>
       <div className="emailbox">
          <input type='email' placeholder="Email"/>
       </div>
       <button className='subs' type="submit"> Subscribe </button>
    </div>
    </form>


    <div className="footer_section">
        <div className="footer_logo"> 
         <img src={Logo} alt="" srcset="" />
        </div>
            <div className="footer_link">
                <div className="footer_link_section">
                    <h4> LEGAL </h4>
                    <a href='/aboutus' ><p> About Us </p></a>
                    <a href='/privacy' ><p> Privacy </p></a>
                    <a href='/terms' ><p> Terms </p></a>
                    <a href='/cookies' ><p> Cookies </p></a>
                </div>
                <div className="footer_link_section">
                    <h4> USEFUL LINKS </h4>
                    <a href='/cvhelp' ><p> Cv Help </p></a>
                    <a href='/jobsearch' ><p> Job Search </p></a>
                    <a href='/contactus' ><p> Contact Us </p></a>
                    
                </div>

                <div className="footer_link_section">
                    <h4> SOCIAL MEDIA </h4>
                    <a href="/"><p>Youtube</p></a>
                    
              
                    <a href="/"><p>LinkedIn</p></a>
                   
                    <a href="/"><p>Facebook</p></a>
                   
                    <a href="/"><p>Instagram</p></a>
                   


                     <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} />
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /> 
                     <FontAwesomeIcon icon={faFacebookSquare} style={{color: "#ffffff",}} /> 
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /> 
                   
                
                    
                </div>

                
            </div>
           
        </div>
        <hr />
        <div className="copyright">
        <p> &copy; 2023 Remcruit</p>

        </div>
        
    </div>
)

}

export default Footer