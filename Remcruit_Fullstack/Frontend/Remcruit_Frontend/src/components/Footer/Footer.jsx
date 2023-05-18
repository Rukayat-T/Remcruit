import React from "react";
import './Footer.css';
import Logo from '../../assets/footerlogo.svg'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    
    faFacebookSquare,
    faInstagramSquare,
    faLinkedin, faYoutube,
    } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import {
        
//       } from "@fortawesome/free-solid-svg-icons";


const Footer=()=>{

    
return(
<div className="footer">
  


    <div className="footer_section">
        <div className="footer_logo"> 
         <img src={Logo} alt="" srcSet="" />
        </div>
            <div className="footer_link">
                 <div className="footer_link_section">
                    <h4> USEFUL LINKS </h4>
                    <a href='/cvhelp' ><p> Cv Help </p></a>
                    <a href='/jobsearch' ><p> Job Search </p></a>
                    <a href='/contactus' ><p> Contact Us </p></a>
                    <a href='/FaqPage'>   <p>FAQ</p></a>
                    
                </div>
                <div className="footer_link_section">
                    <h4> LEGAL </h4>
                    <a href='/aboutus' ><p> About Us </p></a>
                    <a href='/privacy' ><p> Privacy </p></a>
                    <a href='/Term' ><p> Terms </p></a>
                    <a href='/cookies' ><p> Cookies </p></a>
                </div>
               

                <div className="footer_link_section">
                    <h4> SOCIAL MEDIA </h4>
                    <a href="/"><p>Youtube</p></a>
                    {/* <div className="icons"><FontAwesomeIcon icon={faYoutube} style={{color: "#000000",}} /></div> */}
              
                    <a href="/"><p>LinkedIn</p></a>
                    {/* <div className="icons"><FontAwesomeIcon icon={faLinkedin} style={{color: "#000000",}} /></div> */}
                    <a href="/"><p>Facebook</p></a>
                    {/* <div className="icons"><FontAwesomeIcon icon={faFacebookSquare} style={{color: "#000000",}} /></div> */}
                    <a href="/"><p>Instagram</p></a>
                    {/* <div className="icons"><FontAwesomeIcon icon={faInstagramSquare} style={{color: "#000000",}} /></div> */}


                    
                </div>

                <form action=''>

                  <div className="subcribe">
                  <div className="footer_link_section">
                   <h4> NEWSLETTER </h4>
                   </div>
                      <p>Subscribe to our newsletter to get weekly updates of available jobs in your arear</p>
                        <div className="emailbox">
                        <input type='email' placeholder="enter your email"/>
                        <FontAwesomeIcon icon={faEnvelope}/>
                           </div>
                          <button className='subs' type="submit"> Subscribe </button>
                           </div>
                                </form>
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