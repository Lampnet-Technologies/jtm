import React from "react";

const HeroImage = ({ imageUrl, alt }) => {
  return (
    <section className="">
      <div className="blog-bg">
        <img src={imageUrl} alt={alt} />
      </div>
    </section>
  );
};

export default HeroImage;
