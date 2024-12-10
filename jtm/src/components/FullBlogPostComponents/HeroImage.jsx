import React from "react";

const HeroImage = ({ image }) => {
  if (!image?.asset?.url) {
    return <p>Image not available</p>; 
  }

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img
          src={image.asset.url} 
          alt={image.alt || "Hero Image"} 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroImage;
