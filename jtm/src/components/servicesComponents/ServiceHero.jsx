import React from "react";

const ServiceHero = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728616768/Frame_147_wttcv9.png";

  return (
    <section
      className="relative w- w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Content container */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full w-11/12 md:w-9/12 mx-auto text-center md:text-start">
        <h1 className="text-[#fcfcfc] p-4 text-4xl md:text-5xl lg:text-6xl font-normal font-monstserrat">
          Our services
        </h1>
        <h2 className="text-[#fcfcfc] font-light text-base md:text-xl lg:text-2xl mt-4 max-w-2xl font-inter">
          We exist to provide you with strategies and ways that will elevate your
          brand without going to through the extreme
        </h2>
      </div>
    </section>
  );
};

export default ServiceHero;
