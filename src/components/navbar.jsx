
import React , {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signOut, onAuthStateChanged } from '../firebase';
import './Navbar.css';

function Navbar() {
  const [user, setUser] = React.useState(null);
  const [loggingOut, setLoggingOut] = React.useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    setLoggingOut(true);

    try {
      await signOut(auth);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Unable to log out. Please try again.');
    } finally {
      setLoggingOut(false);
    }
  };

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
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/articles" className="nav-btn">Articles</Link>
        <Link to="/tutorials" className="nav-btn">Tutorials</Link>
        <Link to="/post" className="nav-btn post-btn">Post</Link>

      
{user ? (
  <>
    <span className="nav-user">
      {user.displayName || user.email || 'My Account'}
    </span>

    <button
      type="button"
      className="nav-btn logout-btn"
      onClick={handleLogout}
      disabled={loggingOut}
    >
      {loggingOut ? 'Logging out...' : 'Logout'}
    </button>
  </>
) : (
  <Link to="/login" className="nav-btn login-link">
    Login
  </Link>
)}

      </div>
    </nav>
  );
} 

export default Navbar;