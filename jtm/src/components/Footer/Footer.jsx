import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";
import logo from "../../../public/assets/images/jtm-logo.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaTimes, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // If validation passes
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div>
      <div className="footer">
        <div className="footer-items">
          <div className="footer-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <br />
            <div className="subscribe">
              <form onSubmit={handleSubmit}>
                  <label>Subscribe to our Newsletter</label>
                <div className="input-field">
                  <input
                    type="email"
                    value={email}
                    placeholder="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit">Send</button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <div className="first-link">
                <ul>
                  <li>
                    <Link className="link" to="/">
                      Home
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <Link className="link" to="/services">
                      Services
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <Link className="link" to="/blog-posts">
                      Blog
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <Link className="link" to="/about">
                      About Us
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <Link className="link" to="/contact">
                      Contact Us
                    </Link>
                    <hr />
                  </li>
                </ul>
              </div>
              <div className="second-link">
                <ul>
                  <li>
                    <Link className="link" to="/services">
                      Advertising and Sponsorship
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <Link className="link" to="/services">
                      Consulting and Training
                    </Link>
                    <hr />
                  </li>

                  <li>
                    <Link className="link" to="/services">
                      Digital Media Services
                    </Link>
                    <hr />
                  </li>
                </ul>
              </div>
              <div className="third-link">
                <ul>
                  <li>
                    <Link className="link" to="/services">
                      Educational Resources
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <Link className="link" to="/services">
                      Event Management
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <Link className="link" to="/services">
                      International Outreach
                    </Link>
                    <hr />
                  </li>
                  <li>
                    <Link className="link" to="/services">
                      Merchandise and Product Development
                    </Link>
                    <hr />
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-socials">
              <div className="email">
                <Link
                  className="email-link"
                  to="mailTo:thejesustalksmedia@gmail.com"
                >
                  <FaEnvelope /> thejesustalksmedia@gmail.com
                </Link>
              </div>
              <div className="social-icons">
                <div className="icons">
                  <FaYoutube />
                </div>
                <div className="icons">
                  <FaTimes />
                </div>
                <div className="icons">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <p>© 2024 The Jesus Talks Media. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
