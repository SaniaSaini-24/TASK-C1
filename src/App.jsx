
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import HomePage from './routes/HomePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import SignupPage from './routes/SignupPage.jsx';
import About from './components/about.jsx';
import ArticleCard from './components/featuredArticles.jsx';
import TutorialCard from './components/featuredTutorials.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<ArticleCard />} />
            <Route path="/tutorials" element={<TutorialCard />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
