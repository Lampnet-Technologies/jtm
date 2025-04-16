import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import { PortableText } from "@portabletext/react";

const BlogText = () => {
  const { slug } = useParams();
  const [body, setBody] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    client
      .fetch(`*[_type == "post" && slug.current == $slug][0].body`, { slug })
      .then((data) => {
        console.log("Post body:", data);
        setBody(data);
      })
      .catch((error) => {
        console.error("Error fetching body:", error);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading post...</p>;
  if (!body) return <p>No content found.</p>;

  return (
    <section className="px-4 lg:px-0">
      <div className="prose lg:prose-lg max-w-none text-white">
        <PortableText value={body} />
      </div>
    </section>
  );
};

export default BlogText;
