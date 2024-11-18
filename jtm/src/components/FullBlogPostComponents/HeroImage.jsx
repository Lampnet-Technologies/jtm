import React from 'react';

const HeroImage = ({ imageUrl, alt }) => {
  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto">
        <img src={imageUrl} alt={alt} className="w-full" />
      </div>
    </section>
  );
};

export default HeroImage;
