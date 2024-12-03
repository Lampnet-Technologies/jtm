import React, { useEffect } from "react";
import ImageProps from "./ImageProps";
import BodyProps from "./BodyProps";
import { buttons5 } from "./ButtonProps";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Educational = () => {
  const image =
    "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728598031/gux3ww8gvq1jhrrz25k2.png";

  const firstList = buttons5.filter(
    (item) => item.text === "Spiritual development" || item.text === "Christian resources"
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className=" education-section">
      <div className="sections education-wrapper">
        
        {/* Left side (Image) */}
        <div className="image-container" data-aos="fade-right">
          <ImageProps img={image} />
        </div>

        {/* Right texts */}
        <div className="text-container" data-aos="fade-left">
          <div>
            <BodyProps
              header="Educational Resources"
              paragraph="Nurture your faith and foster your spiritual growth with our comprehensive collection of Christian educational materials. We offer a range of resources designed to deepen understanding, encourage devotion, and support spiritual development for individuals, groups, and churches."
              button="Request Service"
            />
          </div>

          {/* Main div containing the first list */}
          <div className="list-container">
            
            {/* First list */}
            <div className="list-items">
              {firstList.map((item) => (
                <li
                  key={item.id}
                  className={`list-item ${
                    item.text === "Spiritual development"
                      ? "list-item--spiritual"
                      : "list-item--resources"
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

export default Educational;
