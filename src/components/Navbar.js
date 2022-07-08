import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="website logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={26} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={26} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu-list active" : "nav-menu-list"}>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Features</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/">FAQs</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
