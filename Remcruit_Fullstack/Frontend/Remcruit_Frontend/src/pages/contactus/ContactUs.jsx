import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import '../contactus/ContactUs.css'
import Logo from '../../assets/fullLogo-cropped.svg'
import { faFacebook, faInstagramSquare, faLinkedin, faLinkedinIn, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faComment, faComments } from '@fortawesome/free-regular-svg-icons';

function ContactUs() {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your code to send the user input to the backend or display a success message here
  };

  return (
    <div>
         <img src={Logo} alt="" srcset="" className='empLogo' />
        <div className="contactus-main-container">
        <div className="leftinfo">
            <div className="chatus">

            <FontAwesomeIcon icon={faComments} className='commentbubble'  />
                <h4>
                    Chat to us
                </h4>
                <p>Our friendly team is here to help.</p>
                
                <Link to={`mailto:contact@remcruit.com`}>contact@remcruit.com</Link>
            </div>

            <div className="callus">
            <FontAwesomeIcon icon={faPhone} className='phoneicon'  />
                <h4>Call us</h4>
                <p>monday-friday from 10am-4pm</p>
                <p className='phonenumba'> +234 419 419 88</p>
            </div>
            
            <ul className='mediaas'>
                        <li><a href="https://www.facebook.com"> <FontAwesomeIcon icon={faFacebook}  className='fabook'  /></a></li>
                        <li><a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin}   className='likin' /></a></li>
                        <li> <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagramSquare}   className='insta' /></a></li>
                        <li><a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutubeSquare}   className='yttube' /></a></li>
                        
                        
                    </ul>
            
        </div>

        <div className="blacbox">
      <h1>How can we help?</h1>
      <form onSubmit={handleSubmit}>
        <div className="username">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <div className="usermail">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={userInput.email}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <div className="message">
        <label>
          Message
          <textarea
            name="message"
            value={userInput.message}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default ContactUs;
