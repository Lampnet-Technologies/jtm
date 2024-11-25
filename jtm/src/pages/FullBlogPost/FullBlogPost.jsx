import React from "react";
import HeaderText from "../../components/FullBlogPostComponents/HeaderText";
import HeaderParagraph from "../../components/FullBlogPostComponents/HeaderParagraph";
import Info from "../../components/FullBlogPostComponents/Info";
import SocialProps from "../../components/FullBlogPostComponents/SocialProps";
import HeroImage from "../../components/FullBlogPostComponents/HeroImage";
import BlogText from "../../components/FullBlogPostComponents/BlogText";
import Footer from "../../components/Footer/Footer";
import './FullBlogPost.css'

const FullBlogPost = () => {
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
        <SocialProps/>
      </div>
      <div>
        <HeroImage/>
      </div>
      <div>
        <BlogText/>
      </div>
    </div>
      <Footer/>
   </>
  );
};

export default FullBlogPost;
