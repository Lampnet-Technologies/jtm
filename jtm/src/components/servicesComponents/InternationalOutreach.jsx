import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const InternationalOutreach = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598041/crmamyichi4cyzbzkmpu.png";

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: false, // Set to false to allow repeated animations on scroll
    });
  }, []);

  return (
    <section className="w-full bg-black text-[#fcfcfc]  pb-20 lg:pb-0">
      <div className="w-full lg:w-10/12 mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-4 lg:gap-8 lg:p-10">
        
        {/* Left texts */}
        <div
          className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-10"
          data-aos="fade-right"
        >
          <div>
            <BodyProps
              header="International Outreach"
              paragraph="Bring your message to life with our professional content creation services, such as video production, audio production, graphic design, and copywriting. We specialize in crafting compelling, faith-inspired media content for Christian organizations, artists, and events."
              button="Request Service"
            />
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

export default InternationalOutreach;
