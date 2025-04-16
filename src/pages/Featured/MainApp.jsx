import React, { useState } from "react";
import Featured from "./Featured";
import Adverts from "./Adverts";

const MainApp = () => {
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleShowForm = () => {
    setShowForm(true); // Show the form when "Request Service" is clicked
    document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the form
  };

  return (
    <div>
      {/* Pass the form visibility handler to Adverts */}
      <Adverts onRequestService={handleShowForm} />
      
      {/* Pass the showForm state to Featured */}
      <Featured showForm={showForm} />
    </div>
  );
};

export default MainApp;
