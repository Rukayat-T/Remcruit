import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/fullLogo-cropped.svg";

import "./navbarSignedIn.css";
import AuthContext from "../../../context/AuthContext";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

function NavbarSignedIn() {
  let { logoutUser } = useContext(AuthContext);
  let { user, jobseeker } = useContext(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="n">
      <nav className="employerNav nav">
        <Link to="/home">
          <img
            src={Logo}
            alt=""
            srcSet=""
            className="empLogo"
          />
        </Link>
        <ul className="navMenu">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li
          onMouseEnter={() => {setDropdown(true);}}
          onMouseLeave={() => {setDropdown(false);}}
          >
            <div 
            className="profile-header"
            
            >
              <img
                src="http://source.unsplash.com/3TLl_97HNJo"
                alt=""
              />
            </div>
            <FontAwesomeIcon icon={faCaretDown} size="sm" style={{color: "#000000",}} />
            {dropdown && <Dropdown/>}
          </li>
          <li>
            <Link to="/find">Find Jobs</Link>
          </li>
          <li>
            <Link to="/comp">Companies</Link>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarSignedIn;
