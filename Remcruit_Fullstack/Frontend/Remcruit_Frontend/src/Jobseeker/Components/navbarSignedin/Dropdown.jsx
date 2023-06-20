import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const profileDropdown = [
    {
      title: "Profile",
      path: "/profile",
      class: "dropdown-item",
    },
    {
      title: "My Jobs",
      path: "/Myjobspage",
      class: "dropdown-item",
    },
    {
      title: "Notifications",
      path: "/notification",
      class: "dropdown-item",
    },
    {
      title: "Settings",
      path: "/settings",
      class: "dropdown-item",
    },
  ];
  const [dropdown, setDropdown] = useState(false);
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
            <li>
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
      </ul>
    </>
  );
}

export default Dropdown;
