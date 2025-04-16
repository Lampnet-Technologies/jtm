import React from "react";

const HeroImage = ({ image }) => {
  // If no image or broken data, show fallback
  if (!image || !image.asset?.url) {
    return <p>Image not available</p>;
  }

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img
          src={image.asset.url}
          alt={image.alt || "Hero Image"}
          className="hero-image w-full object-cover h-auto"
        />
      </div>
    </section>
  );
};

export default HeroImage;
