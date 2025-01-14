import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons2 } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Consulting = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598037/h7lwxwvfhbb3xq2mtako.png";

  const firstList = buttons2.filter(
    (item) =>
      item.text === "Social media management" ||
      item.text === "Content creation"
  );
  const secondList = buttons2.filter(
    (item) => item.text === "Audience engagement"
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="section-container">
      <div className="content-wrapper sections">
        <div className="image-container" data-aos="fade-right">
          <ImageProps img={image} />
        </div>

        <div className="text-container" data-aos="fade-left">
          <div>
            <BodyProps
              header="Consulting and Training"
              paragraph="Our consulting and training services are designed for creatives and Christian organizations, helping you to elevate your digital presence, master content creation, and effectively engage your audience."
              button="Request Service"
            />
          </div>

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

            <div className="list-container">
              {secondList.map((item) => (
                <li
                  key={item.id}
                  className={`list-item ${
                    item.text === "Audience engagement" &&
                    "list-item--audience-engagement"
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

export default Consulting;
