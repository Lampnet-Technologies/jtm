import React, { useState, useEffect } from "react";
import client from "../../client";
import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts from Sanity:", error);
      })
      .finally(() => {
        setLoading(false);
      });
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

  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (!posts.length) {
    return <p>No blog posts found.</p>;
  }

  return (
    <section className="blog-post-section">
      {posts.map((post) => {
        // Extract the first paragraph from the post body
        const firstParagraph = post.body
          ? post.body.find((block) => block._type === "block")
          : null;

        // Calculate reading time
        const readingTime = calculateReadingTime(post.body);

        // Ensure the datePublished is valid and formatted
        let formattedDate = "N/A";
        if (post.datePublished) {
          const publishedDate = new Date(post.datePublished);
          formattedDate = publishedDate.toLocaleDateString("default", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        }

        console.log(`Post: ${post.title}, Date Published: ${formattedDate}`);

        return (
          <Link
            className="blog-content-link"
            to={`/blogs/${post.slug.current}`}
            key={post.slug.current}
            state={{ post }}
          >
            <article className="blog-post-content">
              <div>
                <img
                  src={post.mainImage?.asset?.url || "https://via.placeholder.com/150"}
                  alt={post.title}
                  className=""
                />
              </div>
              <div>
                <h2 className="">{post.title}</h2>

                {/* Render only the first paragraph, if it exists */}
                {firstParagraph && <PortableText value={[firstParagraph]} />}
              </div>
              <div className="author-text">
                <h3 className="">{post.author?.name || "Unknown Author"}</h3>
                <p className="">{formattedDate}</p>
                <p className="">{readingTime} min read</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default BlogPost;
