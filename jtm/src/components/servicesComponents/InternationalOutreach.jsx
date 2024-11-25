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
      <div className="sections international">
        
        {/* Left texts */}
        <div
         className="international-content"
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
          
          data-aos="fade-left"
        >
          <ImageProps img={image} />
        </div>
      </div>
    </section>
  );
};

export default InternationalOutreach;
