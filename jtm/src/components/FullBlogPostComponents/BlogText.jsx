import React, { useState, useEffect } from 'react';
import client from '../../client'; // Adjust the path based on your project structure

const BlogText = () => {
  const [bodyText, setBodyText] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"][0].bodyText`
      )
      .then((data) => setBodyText(data))
      .catch(console.error);
  }, []);

  return (
    <section className="w-full bg-black text-[#fcfcfc]">
      <div className="w-10/12 mx-auto space-y-8">
        {bodyText?.map((block, index) => (
          <p key={index} className="font-inter font-normal text-sm text-justify lg:text-lg">
            {block.children?.map((child) => child.text).join(' ')}
          </p>
        ))}
      </div>
    </section>
  );
};

export default BlogText;
