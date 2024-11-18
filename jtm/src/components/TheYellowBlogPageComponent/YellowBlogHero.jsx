import React from "react";

const YellowBlogHero = () => {
  return (
    <section
      className="relative w-full h-screen pb-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728617032/Frame_171_gngv6f.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10 w-full h-full"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-end items-start h-full w-11/12 lg:w-9/12 mx-auto space-y-6">
        <h5 className="font-inter font-normal text-base text-[#cfa01f]">
          Featured
        </h5>
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0 lg:items-center justify-between">
          <h2 className="font-monstserrat font-normal text-2xl lg:text-3xl w-full text-white lg:w-8/12">
            Consequat vulputate elit velit sit hendrerit. Habitant viverra massa
            arcu etiam. Lorem sed condimentum sed pellentesque
          </h2>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5rem"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </div>
        </div>
        <h5 className="text-[#FCFCFC] text-base font-normal w-full font-inter lg:w-1/2">
          Consequat vulputate elit velit sit hendrerit. Habitant viverra massa
          arcu etiam. Lorem sed condimentum sed pellentesque
        </h5>
      </div>
    </section>
  );
};

export default YellowBlogHero;
