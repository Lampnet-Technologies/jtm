import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const BodyProps = ({ header, paragraph, button, onButtonClick }) => {
  // const [clicked, setClicked] = useState(false);
  return (
    // className="w-full bg-black"
    <section>
      <div className="">
        <div className="body-props">
          <h1 className="">{header}</h1>
          <p>{paragraph}</p>
          <button className="request-btn"  onClick={onButtonClick}>
            {button}
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
