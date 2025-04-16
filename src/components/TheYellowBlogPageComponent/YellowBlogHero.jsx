import React, { useState, useEffect } from "react";
import client from "../../client";
import arrow from "../../../public/assets/images/svg-arrow.png";
import { PortableText } from "@portabletext/react";

const YellowBlogHero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"][0]{
          headerText,
          headerParagraph
        }`
      )
      .then((data) => {
        console.log("Fetched Hero Section Data from Sanity:", data); 
        setHeroData(data);
      })
      .catch((error) => {
        console.error("Error fetching hero section data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!heroData) {
    return <p>No content available</p>;
  }

  return (
    <section className="yellow-blog-page">
      <div className="yellow-blog-bg"></div>

      {/* Content */}
      <div className="yellow-blog-page-content">
        <h4>Featured</h4>

        <div className="blog-header">
          {/* Render the headerText from Sanity */}
          {heroData.headerText ? (
            <PortableText value={heroData.headerText} />
          ) : (
            <h2>No Title Available</h2>
          )}
          <div className="arrow-icon">
            <img src={arrow} alt="Arrow Icon" />
          </div>
        </div>

        {/* Render the headerParagraph from Sanity
        {heroData.headerParagraph ? (
          <h3>
            <PortableText value={heroData.headerParagraph} />
          </h3>
        ) : (
          <h3>No Paragraph Available</h3>
        )} */}
      </div>
    </section>
  );
};

export default YellowBlogHero;
