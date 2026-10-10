import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-col">
          <h4>Stay Connected</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>DEV@Deakin 2026 | Privacy Policy | Terms | Code of Conduct</p>
      </div>
    </footer>
  );
}

export default Footer;