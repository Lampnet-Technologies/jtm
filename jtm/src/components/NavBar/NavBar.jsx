import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/images/jtm-logo.png";
import { FaChevronDown } from "react-icons/fa";
import Hamburger from "hamburger-react";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  function handleClose() {
    setToggle((prevClose) => !prevClose);
  }

  function handleChange() {
    setShow((prevShow) => !prevShow);
  }

  function handleLinkClick() {
    if (show) setShow(false);
  }

  function handleToggle() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div>
      <div className="nav">
        <div className="navbar">
          <div className="logo-nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hamburger-menu">
            <Hamburger toggled={toggle} toggle={handleToggle} />
          </div>
          </div>
          {toggle && (
            <div className="nav-link mobile">
              <ul className="nav--links">
                <li
                  onClick={() => {
                    handleLinkClick();
                    handleClose();
                  }}
                >
                  <Link className="links" to="/">
                    Home
                  </Link>
                </li>
                <li className="services-link" onClick={handleChange}>
                  Services <FaChevronDown />
                </li>
                {show && (
                  <ul id="dropdown-services" className="dropdown">
                    <li
                      onClick={() => {
                        handleLinkClick();
                        handleClose();
                      }}
                    >
                      <Link className="links" to="/services">
                        Advertising and Sponsorship
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleLinkClick();
                        handleClose();
                      }}
                    >
                      <Link className="links" to="/services">
                        Consulting and Training
                      </Link>
                    </li>
                    {/* <li onClick={() => { handleLinkClick(); handleClose(); }}>
                      <Link className="links" to="/services">
                      Content Creation Service
                      </Link>
                    </li> */}
                    <li
                      onClick={() => {
                        handleLinkClick();
                        handleClose();
                      }}
                    >
                      <Link className="links" to="/services">
                        Digital Media Services
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleLinkClick();
                        handleClose();
                      }}
                    >
                      <Link className="links" to="/services">
                        Educational Resources
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleLinkClick();
                        handleClose();
                      }}
                    >
                      <Link className="links" to="/services">
                        Event Management
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleLinkClick();
                        handleClose();
                      }}
                    >
                      <Link className="links" to="/services">
                        International Outreach
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleLinkClick();
                        handleClose();
                      }}
                    >
                      <Link className="links" to="/services">
                        Merchandise and Product Development
                      </Link>
                    </li>
                  </ul>
                )}
                <li
                  onClick={() => {
                    handleLinkClick();
                    handleClose();
                  }}
                >
                  <Link className="links" to="/about">
                    About Us
                  </Link>
                </li>
                <li
                  onClick={() => {
                    handleLinkClick();
                    handleClose();
                  }}
                >
                  <Link className="links" to="/blog-posts">
                    Yellow Blog
                  </Link>
                </li>

                <li
                  onClick={() => {
                    handleLinkClick();
                    handleClose();
                  }}
                >
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
                    <Link className="links" to="/services">
                      Advertising and Sponsorship
                    </Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="/services">
                      Educational Resources
                    </Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="/services">
                      Consulting and Training
                    </Link>
                  </li>
                  {/* <li onClick={handleLinkClick}>
                  <Link className="links" to="/services">
                      Content Creation Service
                      </Link>
                  </li> */}
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="/services">
                      International Outreach
                    </Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="/services">
                      Event Management
                    </Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link className="links" to="/services">
                      Merchandise and Product Development
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
                <Link className="links" to="/blog-posts">
                  Yellow Blog
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
