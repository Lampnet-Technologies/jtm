import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const { slug } = useParams();
  const [bodyImage, setBodyImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          bodyImage {
            asset -> {
              url
            },
            alt
          }
        }`,
        { slug }
      )
      .then((data) => {
        console.log("Fetched bodyImage:", data.bodyImage);
        if (data?.bodyImage?.asset?.url) {
          setBodyImage(data.bodyImage);
        }
      })
      .catch((error) => {
        console.error("Error fetching bodyImage:", error);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <>
      <div className="full-blog">
        <div className="full-blog-header">
          <HeaderText slug={slug} />
          <HeaderParagraph slug={slug} />
        </div>
        <div>
          <Info slug={slug} />
        </div>
        <div>
          <SocialProps />
        </div>
        <div>
          {loading ? (
            <p>Loading image...</p>
          ) : bodyImage ? (
            <HeroImage image={bodyImage} />
          ) : (
            <p>Image not available</p>
          )}
        </div>
        <div>
          <BlogText slug={slug} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FullBlogPost;
