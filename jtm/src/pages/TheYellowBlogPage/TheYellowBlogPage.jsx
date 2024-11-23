import React from 'react'
import YellowBlogHero from '../../components/TheYellowBlogPageComponent/YellowBlogHero'
import BlogPost from '../../components/TheYellowBlogPageComponent/BlogPost'
import Footer from '../../components/Footer/Footer'

const TheYellowBlogPage = () => {
  return (
   <section className='bg-black'>
    <YellowBlogHero/>
    <BlogPost/>
    <Footer/>
   </section>
  )
}

export default TheYellowBlogPage
