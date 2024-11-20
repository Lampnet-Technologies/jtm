import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScroolToTop/ScrollToTop";
import ScrollToTopButton from './components/ScroolToTop/ScrollToTopButton';

import Home from "./pages/Home/Home";
import AboutPage from "./pages/AboutPage/AboutPage";
import Featured from "./pages/Featured/Featured";
import Contact from "./pages/Contact/Contact";
import Error from "./components/Error/Error";
import Services from "./pages/Services/Services";
import TheYellowBlogPage from "./pages/TheYellowBlogPage/TheYellowBlogPage";
import FullBlogPost from "./pages/FullBlogPost/FullBlogPost";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs/:slug" element={<FullBlogPost />} />
        <Route path="/blog-posts" element={<TheYellowBlogPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
