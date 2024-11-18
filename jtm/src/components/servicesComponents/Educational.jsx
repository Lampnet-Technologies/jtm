import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons5 } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Educational = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598031/gux3ww8gvq1jhrrz25k2.png";

  // Filter buttons for the first list
  const firstList = buttons5.filter(
    (item) => item.text === "Spiritual development" || item.text === "Christian resources"
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Animates only once on scroll
    });
  }, []);

  return (
    <section className="w-full bg-black text-[#fcfcfc]">
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
              header="Educational Resources"
              paragraph="Nurture your faith and foster your spiritual growth with our comprehensive collection of Christian educational materials. We offer a range of resources designed to deepen understanding, encourage devotion, and support spiritual development for individuals, groups, and churches."
              button="Request Service"
            />
          </div>

          {/* Main div containing the first list */}
          <div className="flex flex-col gap-2">
            
            {/* First list */}
            <div className="flex items-center justify-center lg:justify-normal gap-2 lg:gap-3">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "Spiritual development"
                      ? "w-1/2 lg:w-[244px] h-[64px]"
                      : item.text === "Christian resources"
                      ? "w-1/2 lg:w-[222px] h-[64px]"
                      : "w-25" // default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a]  text-center rounded-xl py-2 text-inter font-normal`}
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

export default Educational;
