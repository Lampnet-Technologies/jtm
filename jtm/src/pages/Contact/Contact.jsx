import React, { useState } from "react";
import "./Contact.css";
import banner from "../../assets/images/contact-banner.png";
import contact from "../../assets/images/contact.png";
import Footer from "../../components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const servicesOptions = ["Podcast", "Bible quiz", "Church news"];

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
          <img src={banner} alt="" />
        </div>
        <div className="contact-content">
          <div className="contact-detail">
            <div className="contact-left">
              <h3>Lets chat</h3>
              <p>
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
              <h3>You can also reach out to our dedicated team </h3>
              <div className="tv-admin">
                <p>
                  <b>Jesustalk Tv admin</b>
                </p>
                <p>Email: thejesustalkstv@gmail.com </p>
                <p>Phone number: 07086432110</p>
              </div>
              <div className="radio-admin">
                <p>
                  <b>Jesus talk radio admin </b>
                </p>
                <p>Email: https://mailchi.mp/a40e02724e7b/theyellowmail</p>
                <p>Phone number : 07086432110</p>
              </div>
              <div className="yellow-blog-admin">
                <p>
                  <b>Yellow blog admin</b>
                </p>
                <p>Email: mailtheyellowblog@gmail.com </p>
                <p>Phone number : 07086432110</p>
              </div>
            </div>
            <div className="contact-team-right">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
