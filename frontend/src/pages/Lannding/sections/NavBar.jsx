import React, { useState } from "react";
import Logo from "../../../assets/red.svg";
import { HiOutlineMenu } from "react-icons/hi";


const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "Experts",
    },
    {
      text: "Contact",
    },
    {
      text: "LogIn",
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((option) => (
          <a key={option.text} href="#">{option.text}</a>
        ))}
        <button className="primary-button">Sign Up</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineMenu onClick={() => setOpenMenu(true)} />
      </div>
      {openMenu && (
        <div className="custom-drawer">
          <div className="custom-drawer-content">
            {menuOptions.map((item) => (
              <div key={item.text} className="custom-drawer-item" onClick={() => setOpenMenu(false)}>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
