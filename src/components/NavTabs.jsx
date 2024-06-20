//import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import "../assets/css/Navbar.css";


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

const NavTabs = () => {
  const [showMenu, setShowMenu] = useState(false);
  //const currentPage = useLocation().pathname;

 // const menuItems = ["Home", "About", "Portfolio", "Resume", "Contact"];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
          setShowMenu(false);
        }
    };

    return (
      <nav className="nav container">
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav nav__list">
            <li className="nav__item">
                <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/About" className="nav__link" onClick={closeMenuOnMobile}>
                  About
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/Portfolio" className="nav__link" onClick={closeMenuOnMobile}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/Resume" className="nav__link" onClick={closeMenuOnMobile}>
                  Resume
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/Contact" className="nav__link" onClick={closeMenuOnMobile}>
                  Contact
                </NavLink>
              </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
          </div>
          </div>
   
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>  
      </nav>
      
    );
}

export default NavTabs;
