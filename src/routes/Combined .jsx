// Example: src/routes/LoginPage.jsx or HomePage.jsx
import React from 'react';
import Hero from '../components/hero';
import FeaturedArticles from '../components/featuredArticles';
import FeaturedTutorials from '../components/featuredTutorials';
import NewsLetter from '../components/newsLetter';

function CombinedPage() {
  return (
    <div>
      {/* New Task Section */}
      <section className="login-section">
        {/* Your login / sign-up card code */}
      </section>

      {/* Previous Task 3 Content Kept Intact */}
      <section className="previous-task-section">
        <Hero />
        <FeaturedArticles />
        <FeaturedTutorials />
        <NewsLetter />
      </section>
    </div>
  );
}

export default CombinedPage;