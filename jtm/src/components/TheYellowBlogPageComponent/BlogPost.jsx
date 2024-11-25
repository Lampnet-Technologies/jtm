import React, { useState, useEffect } from "react";
import client from "../../client";
import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
         title,
         slug,
         body,
         mainImage {
           asset -> {
             _id,
             url
           }, 
           alt        
         },
         author -> {
           name
         },
         publishedAt
       }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  // Function to estimate reading time based on word count
  const calculateReadingTime = (body) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = body
      ? body.reduce((wordCount, block) => {
          if (block._type === "block" && block.children) {
            return (
              wordCount +
              block.children.reduce(
                (acc, child) =>
                  acc + (child.text ? child.text.split(" ").length : 0),
                0
              )
            );
          }
          return wordCount;
        }, 0)
      : 0;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  };

  return (
    <section
      className="blog-post-section"
    >
      {posts.map((post) => {
        // Extract the first paragraph from the post body directly inside the map function
        const firstParagraph = post.body
          ? post.body.find((block) => block._type === "block")
          : null;

        // Calculate reading time
        const readingTime = calculateReadingTime(post.body);

        // Format the date
        const formattedDate = new Date(post.publishedAt).toLocaleDateString();

        return (
          <Link 
          className="blog-content-link"
            to={`/blogs/${post.slug.current}`}
            key={post.slug.current}
            state={{ post }}
          >
            <article
              className="blog-post-content"
            >
              <div className="">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className=""
                />
              </div> 
              <div className="">
                <h2 className=" ">{post.title}</h2>

                {/* Render only the first paragraph, if it exists */}
                {firstParagraph && <PortableText value={[firstParagraph]} />}
              </div>
              <div className="author-text">
                {/* Display the author name */}
                <h3 className="">
                  {post.author?.name}
                </h3>
                {/* Display the publication date */}
                <p className="">{formattedDate}</p>
                {/* Display estimated reading time */}
                <p className="">
                  {readingTime} min read
                </p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default BlogPost;
