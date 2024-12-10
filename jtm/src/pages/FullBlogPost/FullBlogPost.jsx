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

  useEffect(() => {
    client
      .fetch(`*[_type == "post"][0]{ bodyImage { asset -> { url }, alt } }`)
      .then((data) => setBodyImage(data.bodyImage)) 
      .catch(console.error);
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
          {bodyImage ? (
            <HeroImage image={bodyImage} />
          ) : (
            <p>Loading image...</p>
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
