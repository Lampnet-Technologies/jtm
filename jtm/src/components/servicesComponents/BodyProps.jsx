import React, { useState } from "react";

const BodyProps = (props) => {
  const [clicked, setClicked] = useState(false);

  const handleRequestServiceClick = (e) => {
    // Trigger the click animation
    setClicked(true);

    // Reset the click animation after 500ms (matches the duration of the animation)
    setTimeout(() => {
      setClicked(false);
      window.location.href = "/request"; // Redirect to form section
    }, 500);
  };

  return (
    // className="w-full bg-black"
    <section >
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
           className="request-btn"
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
