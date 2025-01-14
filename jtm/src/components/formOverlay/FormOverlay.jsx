import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FormOverlay.css";

export default function FormOverlay({ closeForm, isOpen }) {
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const servicesOptions = [
    "Advertising and Sponsorship",
    "Consulting and Training",
    "Content Creation Service",
    "Digital Media Services",
    "Educational Resources",
    "Event Management",
    "International Outreach",
    "Merchandise and Product Development",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

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

    toast.success("Message sent successfully!");

    setEmail("");
    setService("");
    setMessage("");
    closeForm();
  };

  if (!isOpen) {
    console.log("FormOverlay not rendered");
    return null;
  }
  console.log("FormOverlay rendered");
  

  return (
    <>
      <div className="form-overlay">
        <div className="close-form" onClick={closeForm}>
          X
        </div>
        <form className="form-overlay-content" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="service">
              Services <span>*</span>
            </label>
            <select
              id="service"
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
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
