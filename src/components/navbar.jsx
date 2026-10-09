import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">DEV@Deakin</Link>
      </div>
      <div className="navbar-search">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-actions">
        <button className="nav-btn post-btn">Post</button>
        <Link to="/login" className="nav-btn login-link">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;