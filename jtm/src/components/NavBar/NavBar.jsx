import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/jtm-logo.png";
import { FaChevronDown } from "react-icons/fa";
import Hamburger from "hamburger-react";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  function handleClose() {
    setToggle(prevClose => !prevClose);
  }

  function handleChange() {
    setShow((prevShow) => !prevShow);
  }

  function handleLinkClick() {
    setShow(false); // Close dropdown on link click
  }

  function handleToggle() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div>
      <div className="nav">
        <div className="navbar">
          <div className="logo">
           <Link to='/'>
           <img src={logo} alt="logo" />
           </Link>
          </div>
          <div className="hamburger-menu">
            <Hamburger toggled={toggle} toggle={handleToggle} />
          </div>
          {toggle && (
            <div className="nav-link mobile">
              <ul className="nav--links">
                <li onClick={() => { handleLinkClick(); handleClose(); }}>
                  <Link className="links" to="/">
                    Home
                  </Link>
                </li>
                <li className="services-link" onClick={handleChange}>
                  Services <FaChevronDown />
                </li>
                {show && (
                  <ul id="dropdown-services" className="dropdown">
                    <li onClick={() => { handleLinkClick(); handleClose(); }}>
                      <Link className="links" to="">
                        Podcast
                      </Link>
                    </li>
                    <li onClick={() => { handleLinkClick(); handleClose(); }}>
                      <Link className="links" to="">
                        Meeting
                      </Link>
                    </li>
                    <li onClick={() => { handleLinkClick(); handleClose(); }}>
                      <Link className="links" to="">
                        Bible debates
                      </Link>
                    </li>
                    <li onClick={() => { handleLinkClick(); handleClose(); }}>
                      <Link className="links" to="">
                        Prayers
                      </Link>
                    </li>
                  </ul>
                )}
                <li onClick={() => { handleLinkClick(); handleClose(); }}>
                  <Link className="links" to="/about">
                    About Us
                  </Link>
                </li>
                <li onClick={() => { handleLinkClick(); handleClose(); }}>
                  <Link className="links" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {/* Desktop Nav Links */}
          <div className="desktop">
            <ul className="nav--links">
              <li onClick={handleLinkClick}>
                <Link className="links" to="/">
                  Home
                </Link>
              </li>
              <li className="services-link" onClick={handleChange}>
                Services <FaChevronDown />
              </li>
              {show && (
                <ul className="dropdown">
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="">
                      Podcast
                    </Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="">
                      Meeting
                    </Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="">
                      Bible debates
                    </Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="">
                      Prayers
                    </Link>
                  </li>
                </ul>
              )}
              <li onClick={handleLinkClick}>
                <Link className="links" to="/about">
                  About Us
                </Link>
              </li>
              <li onClick={handleLinkClick}>
                <Link className="links" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="get-featured">
            <Link to="/featured" className="get-featured-link">
              Get featured
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
