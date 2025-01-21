import React, { useState, useEffect } from "react";
import "./Contact.css";
import contact from "../../../public/assets/images/contact.png";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";

export default function Contact() {
  //AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const servicesOptions = [
    "Advertising and Sponsorship",
    "Consulting and Training",
    "Digital Media Services",
    "Educational Resources",
    "Event Management",
    "International Outreach",
    "Merchandise and Product Development",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      toast.error("Email is required!");
      return;
    }
    if (!service) {
      toast.error("Please select a service!");
      return;
    }
    if (!message) {
      toast.error("Message cannot be empty!");
      return;
    }

    // If validation passes
    toast.success("Message sent successfully!");

    // Reset form
    setEmail("");
    setService("");
    setMessage("");
  };
  return (
    <div>
      <div className="contact">
        <div className="contact-banner">
          <img src='https://res.cloudinary.com/dn4hkronr/image/upload/v1737432261/contact_yht40f.png' alt="" />
        </div>
        <div className="contact-content">
          <div className="contact-detail">
            <div className="contact-left">
              <h3 data-aos="fade-right" data-aos-duration="1000">
                Lets chat
              </h3>
              <p data-aos="fade-right" data-aos-duration="1500">
                Whether you have a question, want to get featured, or simply
                want to connect.
              </p>
              <p>Feel free to send us a message </p>
            </div>
            <div className="contact-right">
              <form className="form" onSubmit={handleSubmit}>
                <div>
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label>
                    Services <span>*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Select a service</option>
                    {servicesOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>
                    Message <span>*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
              <ToastContainer />
            </div>
          </div>
          <div className="contact-team">
            <div className="contact-team-left">
              <h3 data-aos="fade-right" data-aos-duration="1000">
                You can also reach out to our dedicated team{" "}
              </h3>
              <div
                className="tv-admin"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h2>The Jesustalk Tv admin</h2>
                <a
                  href="mailTo:thejesustalkstv@gmail.com"
                  style={{ color: "gray" }}
                >
                  Email: thejesustalkstv@gmail.com
                </a>

                <p>Phone number: 07086432110</p>
              </div>
              <div
                className="radio-admin"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <h2>The Jesus talk radio admin</h2>
                <a
                  href="mailTo:thejesustalksradio@gmail.com"
                  style={{ color: "gray" }}
                >
                  Email: thejesustalksradio@gmail.com
                </a>
                <p>Phone number : 07086432110</p>
              </div>
              <div
                className="yellow-blog-admin"
                data-aos="fade-right"
                data-aos-duration="2500"
              >
                <h2>The Yellow blog admin</h2>
                <a href="mailtheyellowblog@gmail.com" style={{ color: "gray" }}>
                  Email: mailtheyellowblog@gmail.com
                </a>

                <p>Phone number : 07086432110</p>
              </div>
            </div>
            <div
              className="contact-team-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
