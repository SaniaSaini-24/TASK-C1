import React from 'react';
import Hero from '../components/hero';
import FeaturedArticles from '../components/featuredArticles';
import FeaturedTutorials from '../components/featuredTutorials';
import NewsLetter from '../components/newsLetter';

function CombinedPage() {
  return (
    <div className="combined-page">
      <Hero />
      <FeaturedArticles />
      <FeaturedTutorials />
      <NewsLetter />
    </div>
  );
}

export default CombinedPage;