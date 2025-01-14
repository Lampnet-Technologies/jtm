import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons6 } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Event = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728608335/Frame_828_bmfvuw.png";

  // Filter buttons for the first and second lists
  const firstList = buttons6.filter(
    (item) => item.text === "Christian events" || item.text === "Conferences"
  );
  const secondList = buttons6.filter(
    (item) => item.text === "Audience engagement"
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full bg-black text-[#fcfcfc]">
      <div className="sections">
        {/* Left side (Image) */}
        <div
   
          data-aos="fade-right"
        >
          <ImageProps img={image} />
        </div>

        {/* Right texts */}
        <div
          className="event-content"
          data-aos="fade-left"
        >
          <div>
            <BodyProps
              header="Event Coverage"
              paragraph="Create an enriching experience for in-person and online attendees with our professional coverage that captures the heart of your event—whether it’s an intimate gathering or a large-scale concert—ensuring participants leave with lasting and impactful memories."
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
                    item.text === "Christian events" ||
                    item.text === "Conferences"
                      ? "list-item--social-media"
                      : "list-item--content-creation"
                  }`}
                >
                  {item.text}
                </li>
              ))}
            </div>

            <div className="list-container second">
              {secondList.map((item) => (
                <li
                  key={item.id}
                  className={`list-item ${item.text === "Audience engagement"}`}
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
