import React, { useEffect, useRef, useState } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { button } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Adverts = () => {
  
  const containerRef = useRef(null);

  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598022/olgfq6epfbn5j82pdyie.png";

  const firstList = button.filter(
    (item) =>
      item.text === "Radio & Tv" ||
      item.text === "Podcasts" ||
      item.text === "Blogs"
  );

  const secondList = button.filter(
    (item) =>
      item.text === "Newsletters" || item.text === "Sponsorships"
  );

  

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Animates only once on scroll
    });
  }, []);

  const handleRequestServiceClick = () => {
    window.location.href = "/featured#form-section";
  };

  return (
    <section
      className="w-full text-[#fcfcfc] bg-black"
      ref={containerRef}
    >
      <div
        className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 lg:p-10"
      >
        {/* Left side (Image) */}
        <div
          className="w-11/12 mx-auto lg:w-1/2"
          data-aos="fade-right"
        >
          <ImageProps img={image} />
        </div>

        {/* Right texts */}
        <div
          className="flex flex-col w-11/12 mx-auto  lg:w-1/2 gap-4 lg:gap-10"
          data-aos="fade-left"
        >
          <div>
            <BodyProps
              header="Advertising and Sponsorship"
              paragraph="Grow your brand's visibility and reach your target audience through our diverse advertising mediums such as our radio, TV, podcasts, blogs, newsletters and sponsorship of our shows, segments and events"
              button="Request Service"
            />
          </div>

          {/* Main div containing the two separate lists */}
          <div className="flex flex-col gap-2">
            {/* First list */}
            <div className="flex items-left justify-left lg:justify-normal gap-2 lg:gap-3">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "Radio & Tv"
                      ? "w-32 h-[64px]"
                      : item.text === "Podcasts"
                      ? "w-[128px] h-[64px]"
                      : item.text === "Blogs"
                      ? "w-32 h-[64px]"
                      : "w-25"
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a] dark:bg-[#fcfcfc] dark:text-black text-center rounded-xl py-2 text-inter font-normal`}
                >
                  {item.text}
                </li>
              ))}
            </div>

            {/* Second list */}
            <div className="flex items-center justify-center lg:justify-normal gap-2 lg:gap-3">
              {secondList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "Newsletters"
                      ? "w-1/2 lg:w-40 h-[64px]"
                      : item.text === "Sponsorships"
                      ? "w-1/2 lg:w-44 h-[64px]"
                      : "w-25"
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a] dark:bg-[#fcfcfc] dark:text-black text-start rounded-xl py-2 text-inter font-normal`}
                >
                  {item.text}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adverts;
