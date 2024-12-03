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
      <div className="author-details">
        <div>
          <img
            src={author.image?.asset?.url || "https://via.placeholder.com/150"}
            alt={author.name || "Author"}
            className="author-img"
          />
        </div>
        <div className="blog-date">
          <h3 >
            {author.name}
          </h3>
          <div className="">
            <p className="">{date} {month}</p>
            <p >{year}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
