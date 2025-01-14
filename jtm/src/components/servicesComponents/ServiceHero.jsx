import React from "react";

const ServiceHero = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728616768/Frame_147_wttcv9.png";

  return (
    
    <section>
      
      <div className="services-bg">
        <img src={image} alt="" />
        <div className=" services-overlay">
          <div className="services-content">
            <div >

              <h1>Our services</h1>

              <p>
              We help exist to amplify your message by offering tailored media solutions, including promotions, marketing, and storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content container */}
    </section>
  );
};

export default ServiceHero;
