import React, { useState, useEffect } from "react";
import client from "../../client"; // Adjust the import path for your Sanity client

const Info = () => {
  const [infoData, setInfoData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"][0]{
          author -> {
            name,
            image {
              asset -> {
                url
              }
            }
          },
          datePublished
        }`
      )
      .then((data) => setInfoData(data))
      .catch(console.error);
  }, []);

  if (!infoData) {
    return <p>Loading...</p>;
  }

  const { author, datePublished } = infoData;

  // Extract date, month, and year from datePublished
  const publishedDate = new Date(datePublished);
  const date = publishedDate.getDate();
  const year = publishedDate.getFullYear();
  const month = publishedDate.toLocaleString("default", { month: "long" });

  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto flex items-start justify-start gap-4 text-[#fcfcfc]">
        <div>
          <img
            src={author.image?.asset?.url || "https://via.placeholder.com/150"}
            alt={author.name || "Author"}
            className="rounded-full w-20 bg-[#d9d9d9]"
          />
        </div>
        <div>
          <h3 className="font-inter font-semibold text-xl text-[#fcfcfc] dark:text-white">
            {author.name}
          </h3>
          <div className="flex text-inter gap-3">
            <p className="text-[#fcfcfc]">{date}</p>
            <p className="text-[#fcfcfc]">{month}</p>
            <p className="text-[#fcfcfc]">{year}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
