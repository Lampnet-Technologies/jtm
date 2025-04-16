import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import client from "../../client";

const Info = () => {
  const { slug } = useParams(); 
  const [infoData, setInfoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          author -> {
            name,
            image {
              asset -> {
                url
              }
            }
          },
          datePublished
        }`,
        { slug }
      )
      .then((data) => {
        console.log("Fetched Data from Sanity:", data);
        setInfoData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from Sanity:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!infoData) {
    return <p>No data available</p>;
  }

  const { author, datePublished } = infoData;

  let date = "N/A";
  let month = "N/A";
  let year = "N/A";

  if (datePublished) {
    const publishedDate = new Date(datePublished);
    date = publishedDate.getDate();
    year = publishedDate.getFullYear();
    month = publishedDate.toLocaleString("default", { month: "long" });
  }

  return (
    <section className="w-full">
      <div className="author-details">
        <div>
          <img
            src={author?.image?.asset?.url || "https://via.placeholder.com/150"}
            alt={author?.name || "Author"}
            className="author-img"
          />
        </div>
        <div className="blog-date">
          <h3>{author?.name || "Unknown Author"}</h3>
          <div>
            <p>{date} {month}</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
