import React, { useEffect, useState } from "react";
import client from "../../client";
import HeaderText from "../../components/FullBlogPostComponents/HeaderText";
import HeaderParagraph from "../../components/FullBlogPostComponents/HeaderParagraph";
import Info from "../../components/FullBlogPostComponents/Info";
import SocialProps from "../../components/FullBlogPostComponents/SocialProps";
import HeroImage from "../../components/FullBlogPostComponents/HeroImage";
import BlogText from "../../components/FullBlogPostComponents/BlogText";
import Footer from "../../components/Footer/Footer";
import "./FullBlogPost.css";

const FullBlogPost = () => {
  const [bodyImage, setBodyImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"][0]{ bodyImage { asset -> { url }, alt } }`)
      .then((data) => {
        if (data?.bodyImage?.asset?.url) {
          setBodyImage(data.bodyImage);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false)); // Set loading to false after fetch
  }, []);

  return (
    <>
      <div className="full-blog">
        <div className="full-blog-header">
          <HeaderText />
          <HeaderParagraph />
        </div>
        <div>
          <Info />
        </div>
        <div>
          <SocialProps />
        </div>
        <div>
          {loading ? (
            <p>Loading image...</p>
          ) : bodyImage ? (
            <HeroImage image={bodyImage} /> // Pass the image object correctly
          ) : (
            <p>Image not available</p>
          )}
        </div>
        <div>
          <BlogText />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullBlogPost;
