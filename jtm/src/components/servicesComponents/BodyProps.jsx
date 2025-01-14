import React from "react";

const BodyProps = (props) => {
  return (
    <section>
      <div className="body-props">
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
        <button
          className="request-btn"
          onClick={props.onButtonClick}
        >
          {props.button}
        </button>
      </div>
    </section>
  );
};

export default BodyProps;
