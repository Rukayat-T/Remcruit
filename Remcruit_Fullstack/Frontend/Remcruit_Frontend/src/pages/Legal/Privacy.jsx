import React from 'react';
import Terms from './LegalPage';
import Logo from '../../assets/fullLogo.svg'
import { Link } from 'react-router-dom';
function Privacy() {
  return (
    
    <div>
 <nav className='nav'>
        <img src={Logo} alt="" srcSet="" />
        <ul className='navMenu'>
                    <li><Link to='/Term'> Terms and Condition</Link></li>
                    <li><Link to='/Cookies'>Cookies</Link></li>
                    <li><Link to='/Privacy'> Privacy</Link></li>
                   
                   
                </ul>

        <div className="hori">
          <hr />
        </div>
      </nav>

      <Terms 
      title="Terms And Condition" 
      summary="Welcome to our recruitment website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Remcruit's relationship with you in relation to this website." 
      details="The content of the pages of this website is for your general information and use only. It is subject to change without notice.

This website uses cookies to monitor browsing preferences.      

If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.
the website is subject to the laws of Nigeria." />







      <Terms 
      title="Privacy" 
      summary="This privacy policy sets out how Remcruit uses and protects any information that you give us when you use this website. We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement." 
      details="Fusce ut tristique nunc, ut sollicitudin magna. Praesent euismod ligula eu ante consequat, vitae vehicula libero lacinia." />







      <Terms title="Cookies" summary="This is a summary of the conclusion." details="Fusce ut tristique nunc, ut sollicitudin magna. Praesent euismod ligula eu ante consequat, vitae vehicula libero lacinia." />
    </div>
  );
}

export default Privacy;