
import React from 'react';
import About from '../components/about';
import Hero from '../components/hero';
import FeaturedArticles from '../components/featuredArticles';
import FeaturedTutorials from '../components/featuredTutorials';
import NewsLetter from '../components/newsLetter';
import Gallery from '../components/gallery';
import contact from '../components/contact';
import Contact from '../components/contact';

function HomePage() {
  return (
    <div className="homepage">
      <Hero />
        <About />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Gallery />
      <Contact />
      <NewsLetter />
    </div>
  );
}

export default HomePage;
