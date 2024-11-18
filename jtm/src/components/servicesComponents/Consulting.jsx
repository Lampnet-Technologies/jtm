import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons2 } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Consulting = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598037/h7lwxwvfhbb3xq2mtako.png";

  // Separate button items into two lists
  const firstList = buttons2.filter(
    (item) =>
      item.text === "Social media management" || item.text === "Content creation"
  );
  const secondList = buttons2.filter((item) => item.text === "Audience engagement");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Animates only once on scroll
    });
  }, []);

  return (
    <section
      className="w-full   bg-black text-[#fcfcfc]"
    >
      <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8 lg:p-10">
        
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
              header="Consulting and Training"
              paragraph="Empower your organization with cutting-edge media strategies and skills. Our expert consulting and training services are tailored for churches, ministries, and Christian organizations seeking to enhance their digital presence and impact in content creation, social media management, and audience engagement."
              button="Request Service"
            />
          </div>

          {/* Main div containing the two separate lists */}
          <div className="flex flex-col gap-2">
            
            {/* First list */}
            <div className="flex items-center justify-center lg:justify-normal gap-2 lg:gap-3">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "Social media management"
                      ? "w-[284px] h-[64px]"
                      : item.text === "Content creation"
                      ? "w-[200px] h-[64px] px-2"
                      : "w-25" // default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a]   text-center rounded-xl py-2 text-inter font-normal`}
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
                    item.text === "Audience engagement"
                      ? "w-full lg:w-[249px] h-[64px]"
                      : "w-25" // default width for remaining items
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

export default Consulting;
