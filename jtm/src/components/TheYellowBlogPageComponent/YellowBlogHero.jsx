import React from "react";
import arrow from '../../../public/assets/images/svg-arrow.png'
const YellowBlogHero = () => {
  return (
    <section
className="yellow-blog-page"
    >
      <div  className="yellow-blog-bg"></div>
      {/* Dark overlay */}

      {/* Content */}
      <div className="yellow-blog-page-content">
        <h4 className="">
          Featured
        </h4>
        <div className="blog-header">
          <h2 className="">
            Consequat vulputate elit velit sit hendrerit. Habitant viverra massa
            arcu etiam. Lorem sed condimentum sed pellentesque
          </h2>
         <div className="arrow-icon">
          <img src={arrow} alt="" />
         </div>
        </div>
        <h3 >
          Consequat vulputate elit velit sit hendrerit. Habitant viverra massa
          arcu etiam. Lorem sed condimentum sed pellentesque
        </h3>
      </div>
    </section>
  );
};

export default YellowBlogHero;
