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
    (item) => item.text === "Newsletters" || item.text === "Sponsorships"
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
    // className="w-full text-[#fcfcfc] bg-black"
    <section ref={containerRef}>
      {/* className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 lg:p-10" */}
      <div className="advert-section sections">
        {/* Left side (Image) */}
        {/* className="w-11/12 mx-auto lg:w-1/2" */}
        {/* data-aos="fade-right" */}
        <div className="advert-image">
          <ImageProps img={image} />
        </div>

        {/* Right texts */}
        {/* className="flex flex-col w-11/12 mx-auto  lg:w-1/2 gap-4 lg:gap-10"
          data-aos="fade-left" */}
        <div className="advert-content">
          <div>
            <BodyProps
              header="Advertising and Sponsorship"
              paragraph="Grow your brand's visibility and reach your target audience through our diverse advertising mediums such as our radio, TV, podcasts, blogs, newsletters and sponsorship of our shows, segments and events"
              button="Request Service"
            />
          </div>

          {/* Main div containing the two separate lists */}
          <div className="list-wrapper">
            <div className="list-container">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  className={`list-item ${
                    item.text === "Social media management"
                      ? "list-item--social-media"
                      : "list-item--content-creation"
                  }`}
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
