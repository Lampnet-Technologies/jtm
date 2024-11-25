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
  const secondList = buttons6.filter(
    (item) => item.text === "Audience engagement"
  );

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animations
      once: true, // Animate only once when the element first comes into view
    });
  }, []);

  return (
    <section className="w-full bg-black text-[#fcfcfc]">
      <div className="sections">
        {/* Left side (Image) */}
        <div
          // className="w-11/12 mx-auto lg:w-1/2"
          data-aos="fade-right"
        >
          <ImageProps img={image} />
        </div>

        {/* Right texts */}
        <div
          className="event-content"
          // className="flex flex-col w-11/12 mx-auto lg:w-1/2 gap-4 lg:gap-10"
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
