import React from "react";

const ServiceHero = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728616768/Frame_147_wttcv9.png";

  return (
    // className="relative w- w-full h-screen bg-cover bg-center bg-no-repeat"
    // style={{
    //   backgroundImage: `url(${image})`,
    // }}
    <section>
      {/* Dark overlay */}
      <div className="services-bg">
        <img src={image} alt="" />
        {/* absolute inset-0 bg-black opacity-30 z-10 */}
        <div className=" services-overlay">
          <div className="services-content">
            {/* relative z-20 flex flex-col justify-center items-center md:items-start h-full w-11/12 md:w-9/12 mx-auto text-center md:text-start */}
            <div className="">
              {/* className="text-[#fcfcfc] p-4 text-4xl md:text-5xl lg:text-6xl font-normal font-monstserrat" */}
              {/* data-aos="zoom-in-down" data-aos-duration="1500" */}
              <h1>Our services</h1>
              {/* className="text-[#fcfcfc] font-light text-base md:text-xl lg:text-2xl mt-4 max-w-2xl font-inter" */}
              {/* data-aos="zoom-in-down" data-aos-duration="1500" */}
              <p>
                We exist to provide you with strategies and ways that will
                elevate your brand without going to through the extreme
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
