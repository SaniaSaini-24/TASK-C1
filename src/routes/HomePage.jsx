// src/routes/HomePage.jsx
import React from 'react';
import Hero from '../components/hero';
import FeaturedArticles from '../components/featuredArticles';
import FeaturedTutorials from '../components/featuredTutorials';
import NewsLetter from '../components/newsLetter';

function HomePage() {
  return (
    <div className="homepage">
      <Hero />
      <FeaturedArticles />
      <FeaturedTutorials />
      <NewsLetter />
    </div>
  );
}

export default HomePage;