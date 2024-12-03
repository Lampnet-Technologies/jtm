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
            name,
            image
          },
          datePublished,
          categories[]-> {
            title
          },
          headerText,
          headerParagraph,
          bodyText
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
      className="grid lg:grid-cols-3 py-10 gap-8 items-center justify-center w-full lg:w-10/12 mx-auto bg-black text-white"
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
            to={`/blogs/${post.slug.current}`}
            key={post.slug.current}
            state={{ post }}
          >
            <article
              className="blog-card space-y-3 border border-gray-600  min-h-auto w-10/12 lg:w-full mx-auto p-5 rounded-2xl shadow transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-96 rounded-2xl transition-transform duration-300 ease-out hover:scale-110"
                />
              </div> 
              <div className="font-inter space-y-4 lg:w-full">
                <h2 className="text-2xl ">{post.title}</h2>

                {/* Render only the first paragraph, if it exists */}
                {firstParagraph && <PortableText value={[firstParagraph]} />}
              </div>
              <div className="flex items-center justify-between">
                {/* Display the author name */}
                <h3 className="font-inter font-normal text-base text-[#DB2A6B]">
                  {post.author?.name}
                </h3>
                {/* Display the publication date */}
                <p className="text-sm text-gray-300">{formattedDate}</p>
                {/* Display estimated reading time */}
                <p className="font-normal text-sm font-inter text-gray-300">
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
