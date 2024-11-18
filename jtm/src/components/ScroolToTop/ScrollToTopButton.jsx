import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={handleScrollToTop} style={buttonStyle}>
        ^
      </button>
    )
  );
};

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  fontSize: "30px",
  fontWeight: "bold",
  paddingTop: "10px",
  borderRadius: "5px",
  backgroundColor: "#c99c15",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  transition: ".3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "50px",
  minHeight: "45px",
};

export default ScrollToTopButton;
