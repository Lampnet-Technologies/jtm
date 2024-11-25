import React from 'react'
import { paragraphs } from './ParaObgject';

const BlogText = () => {
  return (
    <section className="">
      <div className="blog-text">
        {paragraphs.map((item) => {
          return (
            <p key={item.id} className='font-inter font-normal text-sm text-justify lg:text-lg'>
              {item.text}
            </p>
          );
        })}
      </div>
    </section>
  )
}

export default BlogText
