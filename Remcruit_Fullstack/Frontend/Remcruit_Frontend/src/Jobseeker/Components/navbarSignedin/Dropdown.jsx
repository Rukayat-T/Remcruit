import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../context/AuthContext";

function Dropdown() {
  const profileDropdown = [
    {
      title: "Profile",
      path: "/profile",
      class: "dropdown-item",
      icon: faUser,
    },
    {
      title: "My Jobs",
      path: "/Myjobspage",
      class: "dropdown-item",
      icon: faHeart,
    },
    {
      title: "Notifications",
      path: "/notification",
      class: "dropdown-item",
      icon: faBell,
    },
    {
      title: "Settings",
      path: "/settings",
      class: "dropdown-item",
      icon: faSliders,
    },
  ];
  const [dropdown, setDropdown] = useState(false);
  let { logoutUser } = useContext(AuthContext);
  return (
    <>
      <ul
        onClick={() => setDropdown(!dropdown)}
        className={
          dropdown ? "profile-submenu dropdownclicked" : "profile-submenu"
        }
      >
        {profileDropdown.map((item) => {
          return (
            <li className="list-items">
              <FontAwesomeIcon
                icon={item.icon}
                style={{ color: "#000000" }}
              />
              <Link
                to={item.path}
                className={item.class}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <Link onClick={logoutUser}
          className="dropdown-item"
          >Logout</Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
