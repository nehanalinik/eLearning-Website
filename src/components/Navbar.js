import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => setClick(false);
  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1200}
          onClick={closeMenu}
        >
          <img src={logo} alt="website logo" />
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={26} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={26} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu-list active" : "nav-menu-list"}>
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1200}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-50}
              duration={1200}
              onClick={closeMenu}
            >
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={-40}
              duration={1200}
              onClick={closeMenu}
            >
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="faqs"
              spy={true}
              smooth={true}
              offset={-20}
              duration={1200}
              onClick={closeMenu}
            >
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-10}
              duration={1200}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
