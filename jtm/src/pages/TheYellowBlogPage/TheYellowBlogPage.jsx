import React from 'react'
import YellowBlogHero from '../../components/TheYellowBlogPageComponent/YellowBlogHero'
import BlogPost from '../../components/TheYellowBlogPageComponent/BlogPost'
import Footer from '../../components/Footer/Footer'
import './TheYellowBlog.css'
const TheYellowBlogPage = () => {
  return (
   <section>
    <YellowBlogHero/>
    <BlogPost/>
    <Footer/>
   </section>
  )
}

export default TheYellowBlogPage
