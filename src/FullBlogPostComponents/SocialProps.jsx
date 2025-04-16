import React from "react";
import { icons } from "./SocialObject";

const SocialProps = () => {
  return (
    <section className="">
      <div className="blog-social">
        {icons.map((item) => (
          <div
          className="blog-media"
            key={item.id}
            dangerouslySetInnerHTML={{ __html: item.image }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SocialProps;
