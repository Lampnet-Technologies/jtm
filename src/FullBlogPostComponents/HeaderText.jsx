import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";

const HeaderText = () => {
  const { slug } = useParams();
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    client
      .fetch(`*[_type == "post" && slug.current == $slug][0].title`, { slug })
      .then((data) => {
        console.log("Post title:", data);
        setTitle(data);
      })
      .catch((error) => {
        console.error("Error fetching title:", error);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading title...</p>;
  if (!title) return <p>No title found.</p>;

  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto">
        <h2 className="font-monstserrat text-xl lg:text-3xl font-normal text-[#fcfcfc] w-full lg:w-8/12">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default HeaderText;
