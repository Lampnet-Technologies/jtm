import React, { useState } from "react";

const BodyProps = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleRequestServiceClick = (e) => {
    // Trigger the click animation
    setClicked(true);

    // Reset the click animation after 500ms (matches the duration of the animation)
    setTimeout(() => {
      setClicked(false);
      window.location.href = "/featured#form-section"; // Redirect to form section
    }, 500);
  };

  return (
    <section className="w-full bg-black">
      <div className="">
        <div className="space-y-5 lg:space-y-10 flex flex-col items-start lg:items-start lg:text-start" data-aos="fade-right" > 
          <h1 className="font-inter font-semibold text-2xl text-[#fcfcfc]">
            {props.header}
          </h1>
          <p className="text-xl font-normal font-inter text-[#fcfcfc] lg:text-start text-left" data-aos="fade-right">
            {props.paragraph}
          </p>
          <button
            onClick={handleRequestServiceClick}
            className={`bg-[#fabc52] text-black font-inter font-normal text-base rounded-full w-48 h-12 
              ${clicked ? "animate-click" : ""}`}
            style={{
              transition: "all 0.5s ease",
              border: "2px solid transparent",
              cursor: "pointer",
              display: "inline-block",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#f8c66f";
              e.target.style.color = "#000";
              e.target.style.border = "2px solid #f8c66f";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#fabc52";
              e.target.style.color = "black";
              e.target.style.border = "2px solid transparent";
            }}
            data-aos="fade-right"
            data-aos-duration="4000" 
             data-aos-delay="200"
          >
            {props.button}
          </button>
        </div>
      </div>

      {/* Inline CSS for click animation */}
      <style>{`
        .animate-click {
          animation: click-animation 0.5s ease-out;
        }

        @keyframes click-animation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default BodyProps;
