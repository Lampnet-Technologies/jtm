import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons6 } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Event = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728608335/Frame_828_bmfvuw.png";

  // Filter buttons for the first and second lists
  const firstList = buttons6.filter(
    (item) => item.text === "Christian events" || item.text === "Conferences"
  );
  const secondList = buttons6.filter((item) => item.text === "Audience engagement");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Animate only once when the element first comes into view
    });
  }, []);

  return (
    <section className="w-full bg-black text-[#fcfcfc]">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 lg:p-10">
        
        {/* Left side (Image) */}
        <div
          className="w-11/12 mx-auto lg:w-1/2"
          data-aos="fade-right"
        >
          <ImageProps img={image} />
        </div>

        {/* Right texts */}
        <div
          className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-4 lg:gap-10"
          data-aos="fade-left"
        >
          <div>
            <BodyProps
              header="Event Coverage"
              paragraph="Capture the spirit and impact of your Christian events with our professional coverage services. From intimate church gatherings to large-scale conferences, we bring your events to life for both attendees and those unable to be there in person."
              button="Request Service"
            />
          </div>

          {/* Main div containing the two separate lists */}
          <div className="flex flex-col gap-2 ">
            
            {/* First list */}
            <div className="flex items-center justify-start  lg:justify-normal gap-2 lg:gap-3">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "Christian events"
                      ? "w-[204px] h-[64px]"
                      : item.text === "Conferences"
                      ? "w-[242px] h-[64px]"
                      : "w-25" // Default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a]  text-center rounded-xl py-2 text-inter font-normal`}
                >
                  {item.text}
                </li>
              ))}
            </div>

            {/* Second list */}
            <div className="flex items-center justify-start lg:justify-normal gap-2 lg:gap-3">
              {secondList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "Audience engagement"
                      ? "w-[293px] h-[64px]"
                      : "w-25" // Default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a] dark:bg-[#fcfcfc] dark:text-black text-center rounded-xl py-2 text-inter font-normal`}
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

export default Event;
