import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../../client";
import { PortableText } from "@portabletext/react";

const HeaderParagraph = () => {
  const { slug } = useParams();
  const [headerParagraph, setHeaderParagraph] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    client
      .fetch(`*[_type == "post" && slug.current == $slug][0].headerParagraph`, { slug })
      .then((data) => setHeaderParagraph(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]); 

  if (loading) return <p>Loading paragraph...</p>;
  if (!headerParagraph) return <p>No header paragraph found.</p>;

  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto">
        <p className="font-inter font-normal text-sm lg:text-lg text-[#fcfcfc] w-full lg:w-8/12">
          <PortableText value={headerParagraph} />
        </p>
      </div>
    </section>
  );
};

export default HeaderParagraph;
