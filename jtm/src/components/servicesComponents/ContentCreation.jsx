import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons4 } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ContentCreation = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598028/hzm18n7gqirt8nd0wmik.png";

  // Separate button items into two lists
  const firstList = buttons4.filter(
    (item) => item.text === "Video production" || item.text === "Audio production"
  );
  const secondList = buttons4.filter(
    (item) => item.text === "Graphic design" || item.text === "Copywriting"
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Animate only once on scroll
    });
  }, []);

  return (
    <section className="w-full bg-black text-[#fcfcfc]">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-2 lg:gap-8 lg:p-10">
        
        {/* Left texts */}
        <div
          className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-4 lg:gap-10"
          data-aos="fade-right"
        >
          <div>
            <BodyProps
              header="Content Creation Services"
              paragraph="Bring your message to life with our professional content creation services, such as video production, audio production, graphic design, and copywriting. We specialize in crafting compelling, faith-inspired media content for Christian organizations, artists, and events."
              button="Request Service"
            />
          </div>

          {/* Main div containing the two separate lists */}
          <div className="flex flex-col gap-2">
            
            {/* First list */}
            <div className="flex items-center justify-start lg:justify-normal gap-2 lg:gap-3">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  to={item.path}
                  className={`${
                    item.text === "Video production" || item.text === "Audio production"
                      ? "w-[201px] h-[64px]"
                      : "w-25" // default width for remaining items
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
                    item.text === "Graphic design" || item.text === "Copywriting"
                      ? "w-[201px] lg:w-[201px] h-[64px]"
                      : "w-25" // default width for remaining items
                  } flex items-center justify-center bg-[#ebdfc9] text-[#1b1a1a]  text-center rounded-xl py-2 text-inter font-normal`}
                >
                  {item.text}
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* Right side (Image) */}
        <div
          className="w-11/12 mx-auto lg:w-1/2"
          data-aos="fade-left"
        >
          <ImageProps img={image} />
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
