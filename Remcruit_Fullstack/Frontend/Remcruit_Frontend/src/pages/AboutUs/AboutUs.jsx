import React from 'react';
// import NavbarSignedIn from '../../components/Navbar/Navbar'
import blackblob from '../AboutUs/static/blackblob.png'
import people from '../AboutUs/static/people.png'
import people2 from '../AboutUs/static/people2.png'
import yellowblob from '../AboutUs/static/yellowblob.png'
import Footer from '../../components/Footer/Footer'
import './static/AboutUs.css'
import Locator_map_of_Nigeria_in_Africa1 from '../AboutUs/static/Locator_map_of_Nigeria_in_Africa1.png'
import Navbar from '../../components/Navbar/Navbar'
import { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import NavbarSignedIn from '../../Jobseeker/Components/navbarSignedin/NavbarSignedIn';


function AboutUs() {
  let {user} = useContext(AuthContext)
  return (
   
    <div>
      {user ?  <NavbarSignedIn /> :  <Navbar/> }
      
      <div className="aboutus-main">
       <NavbarSignedIn />
       <div className="firstcontain">
       <div className="aboutus">
        <h1>About Us</h1>
        <p> At Remcruit, we're passionate about connecting talented professionals with their dream jobs. Our mission is to make the recruitment process as seamless and enjoyable as possible for both job seekers and employers.

We understand that searching for a new job or finding the right candidate can be a daunting task. That's why we're dedicated to providing personalized and efficient recruitment services to help our clients achieve their goals.</p>
      </div>
        <div className="images">
        <img src={blackblob} alt='blackclob'></img>
        <img src={people} alt='peopleb'></img>
        </div>
        </div>
       



      <div className="usersdata">
        <div className="stats">
        <div className="stats1">
        <h2>300M</h2>
        <p>Unique monthly visitors</p>

        </div>
        <div className="stats2">
        <h2>225M</h2>
        <p>Resumes on Job Smart</p>

        </div>

        <div className="stats3">
        <h2>700M</h2>
        <p>Total ratings and reviewst</p>

        </div>
        </div>
        <div className="information">
          <h2>We have connected over 1 trillion job seekers and providers</h2>
          <p>Our mission is to make the recruitment process simple, efficient, and transparent for both job seekers and employers. With years of experience in the industry, we understand the challenges faced by both parties and work tirelessly to bridge the gap between them.
At our core, we value honesty, integrity, and respect for all individuals. We believe that everyone deserves an equal chance to succeed and we strive to create an inclusive environment that fosters diversity and growth.</p>
        </div>

        


      </div>

      <div className="mapsesection">
        <div className="map">
        <img src={Locator_map_of_Nigeria_in_Africa1} alt='map of africa'></img>
        </div>
        <div className="maptext">
        <h3>A world of difference </h3>
        <p>Our growing community stretches across 20 states, where companies and talent can tap into job smarts market-specific insights to find the right fit
        "Join our team and make a world of difference by contributing to our mission of making the world a better place.
        "Join our team and make a world of difference by contributing to our mission of making the world a better place.
        "Join our team and make a world of difference by contributing to our mission of making the world a better place.
        </p>
        </div>
        </div>

        <div className="ourpeople">
         
        <div className="ourpeopletext">
        <h3>Our people</h3>
        <p>Our team is composed of skilled recruiters, HR experts, and IT professionals who work together to provide top-notch services to our clients. We use the latest technology and tools to ensure that our platform is user-friendly, secure, and up-to-date.

We take pride in our work and are committed to delivering exceptional results. Whether you are a job seeker looking for your dream job or an employer seeking top talent, we are here to help you achieve your goals.

Thank you for considering our recruitment website as your partner in your job search or hiring journey. We look forward to working with you and helping you succeed!
</p>
</div>
<div className="ourpeopleimg">
        <img src={yellowblob} alt='blackclob' className='yelow'></img>
        <img src={people2} alt='peopleb'></img>
        </div>
    
        </div>
        <Footer />
        </div>
    </div>
  )
}
export default AboutUs;
