import React, { useState, useEffect } from "react";
import client from "../../client";

const BlogText = () => {
  const [bodyText, setBodyText] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"][0].bodyText`)
      .then((data) => setBodyText(data))
      .catch(console.error);
  }, []);

  return (
    <section className="">
      <div className="">
        {bodyText?.map((block, index) => (
          <p
            key={index}
            className="font-inter font-normal text-sm text-justify lg:text-lg"
          >
            {block.children?.map((child) => child.text).join(" ")}
          </p>
        ))}
      </div>
    </section>
  );
};

export default BlogText;
