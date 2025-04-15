import React, { useEffect, useState } from "react";
import client from "../../client"; // Import the existing Sanity client
import imageUrlBuilder from "@sanity/image-url";

// Initialize the Sanity image URL builder
const builder = imageUrlBuilder(client);

// Function to build the image URL
const urlFor = (source) => builder.image(source).url();

const HeroImage = ({ imageId }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the image from Sanity
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "imageAsset" && _id == $imageId][0]`,
          { imageId }
        );
        setImage(data);
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    };

    if (imageId) {
      fetchImage();
    }
  }, [imageId]);

  // Show loading state
  if (loading) {
    return <p>Loading image...</p>;
  }

  // Show fallback if no image is found
  if (!image) {
    return <p>Image not available</p>;
  }

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img
          src={urlFor(image)} // Get the image URL from Sanity
          alt={image.alt || "Hero Image"} 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroImage;
