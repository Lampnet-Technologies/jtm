import React, { useState, useEffect } from "react";
import client from "../../client";

const HeaderText = () => {
  const [headerText, setHeaderText] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"][0].headerText`)
      .then((data) => setHeaderText(data))
      .catch(console.error);
  }, []);

  return (
    <section className="w-full">
      <div className="w-10/12 mx-auto">
        <h2 className="font-monstserrat text-xl lg:text-3xl font-normal text-[#fcfcfc] w-full lg:w-8/12">
          {headerText
            ? headerText[0]?.children?.map((child) => child.text).join(" ")
            : "Loading..."}
        </h2>
      </div>
    </section>
  );
};

export default HeaderText;
