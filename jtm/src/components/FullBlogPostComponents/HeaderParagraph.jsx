import React, { useState, useEffect } from 'react';
import client from '../../client'; // Adjust the path based on your project structure

const HeaderParagraph = () => {
  const [headerParagraph, setHeaderParagraph] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"][0].headerParagraph`
      )
      .then((data) => setHeaderParagraph(data))
      .catch(console.error);
  }, []);

  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto">
        <p className="font-inter font-normal text-sm lg:text-lg text-[#fcfcfc] w-full lg:w-8/12">
          {headerParagraph 
            ? headerParagraph[0]?.children?.map((child) => child.text).join(' ') 
            : 'Loading...'}
        </p>
      </div>
    </section>
  );
};

export default HeaderParagraph;
