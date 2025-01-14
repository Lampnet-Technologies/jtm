import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import AOS from "aos";
import "aos/dist/aos.css";

const InternationalOutreach = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598041/crmamyichi4cyzbzkmpu.png";

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
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
              paragraph="Partner with us to create compelling, faith-inspired media content for your outreaches and events beyond Nigeria and Africa. Our services include video production, audio production, graphic design, and copywriting tailored to amplify your message and impact globally."
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
