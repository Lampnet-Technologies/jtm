import React from 'react'
import { paragraphs } from './ParaObgject';

const BlogText = () => {
  return (
    <section className="w-full bg-black text-[#fcfcfc] ">
      <div className="w-10/12 mx-auto space-y-8">
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
