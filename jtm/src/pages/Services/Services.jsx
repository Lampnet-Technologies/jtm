import React, { useState, useEffect } from "react";
import ServiceHero from "../../components/servicesComponents/ServiceHero";
import Adverts from "../../components/servicesComponents/Adverts";
import Consulting from "../../components/servicesComponents/Consulting";
import Educational from "../../components/servicesComponents/Educational";
import Event from "../../components/servicesComponents/Event";
import InternationalOutreach from "../../components/servicesComponents/InternationalOutreach";
import Footer from "../../components/Footer/Footer";
import FormOverlay from "../../components/formOverlay/FormOverlay";
import BodyProps from "../../components/servicesComponents/BodyProps";
import "./services.css";

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Disable/Enable body scroll
  useEffect(() => {
    if (isFormOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isFormOpen]);  

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {

    setIsFormOpen(false);
  };

  return (
    <div className="services">
      {/* Pass the handler to open and close the form */}
      <FormOverlay closeForm={handleCloseForm} isOpen={isFormOpen} />

      {/* Content */}
      <ServiceHero />
      <Adverts />
      <Consulting />
      <Educational />
      <Event />
      <InternationalOutreach />

      {/* Button to Open Request Form */}
      <BodyProps
        header="Request Our Services"
        paragraph="We provide top-notch services tailored to your needs."
        button="Request Form"
        onButtonClick={handleOpenForm}
      />

      <Footer />
    </div>
  );
};

export default Services;
