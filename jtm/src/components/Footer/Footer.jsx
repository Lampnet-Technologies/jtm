import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";
import logo from "../../assets/images/jtm-logo.png";
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
            <img src={logo} alt="" />
            <div className="subscribe">
              <p>Subscribe to Our Newsletter</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Subscribe to our Newsletter</label><br />
                  <input
                    type="email"
                    value={email}
                    placeholder="your email"
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
                </li>
                <li>
                  <Link className="link" to="">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="second-link">
              <ul>
                <li>
                  <Link className="link" to="">
                    Advertising and Sponsorship
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    Consulting and Training
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    Content Creation Service
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    Digital Media Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="third-link">
              <ul>
                <li>
                  <Link className="link" to="">
                    Educational Resources
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    Event Management
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    International Outreach
                  </Link>
                </li>
                <li>
                  <Link className="link" to="">
                    Merchandise and Product Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-socials">
            <div className="email">
              <p><FaEnvelope/> thejesustalksmedia@gmail.com</p>
            </div>
            <div className="social-icons">
              <div className="icons">
                <FaYoutube />
              </div>
              <div className="icons">
                <FaTimes/>
              </div>
              <div className="icons">
                <FaInstagram />
              </div>
            </div>
          </div>
         </div>
        </div>
        <div className="copyrights">
          <p>© 2024 Jesus Talks Media. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
