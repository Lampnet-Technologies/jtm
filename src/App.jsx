import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScroolToTop/ScrollToTop";
import ScrollToTopButton from './components/ScroolToTop/ScrollToTopButton';
import loading from '/assets/images/loading.gif'

const Home = lazy(() => import("./pages/Home/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const Featured = lazy(() => import("./pages/Featured/Featured"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Error = lazy(() => import("./components/Error/Error"));
const Services = lazy(() => import("./pages/Services/Services"));
const TheYellowBlogPage = lazy(() => import("./pages/TheYellowBlogPage/TheYellowBlogPage"))
const FullBlogPost = lazy(() => import("./pages/FullBlogPost/FullBlogPost"))




function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div 
     style={
      {
        width: '80%',
          margin: '260px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }
     }
      className='loading-gif'>
        <img 
        src={loading} alt="Loading..." />
      </div>}>
        <NavBar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blogs/:slug" element={<FullBlogPost />} />
          <Route path="/blog-posts" element={<TheYellowBlogPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ScrollToTopButton/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
