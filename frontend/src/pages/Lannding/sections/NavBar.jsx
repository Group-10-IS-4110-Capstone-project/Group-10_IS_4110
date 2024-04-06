import React, { useState } from "react";
import Logo from "../../../assets/red.svg";
import { HiOutlineMenu } from "react-icons/hi";


const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);



  const menuToggler = () => (
    (!openMenu) ? setOpenMenu(true) : setOpenMenu(false)
  )


  const menuOptions = [
    {
      text: "Home",
      path: "/"
    },
    {
      text: "About",
      path: "/about"
    },
    {
      text: "Experts",
      path: "/experts"
    },
    {
      text: "Contact",
      path: "/"
    },
    {
      text: "LogIn",
      path: "/login"
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((option) => (
          option.text !== "Contact" ? <a key={option.text} href={option.path}>{option.text}</a> : <a key={option.text} href="#contact">{option.text}</a>
        ))}
        <a href="/signup"><button className="primary-button">Sign Up</button></a>
      </div>
      
      <div className="navbar-menu-container">
        <HiOutlineMenu onClick={menuToggler} />
      </div>
      {openMenu && (
        <div className="custom-drawer">
          <div className="custom-drawer-content">
            {menuOptions.map((item) => (
              <a key={item.text} href={item.path} className="custom-drawer-item">
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
