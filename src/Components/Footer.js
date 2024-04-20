import React, { useState, useEffect } from 'react';
import '../Style/Footer.css';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const triggerScroll = 425; // Change this value as needed for footer to pop up
      setShowFooter(scrollPosition > triggerScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'show' : ''}`}>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.facebook.com"><Facebook /></a>
          <a href="https://www.twitter.com"><Twitter /></a>
          <a href="https://www.instagram.com"><Instagram /></a>
          <a href="https://www.linkedin.com"><LinkedIn /></a>
        </div>
        <p>AutoYard &copy; 2024. All rights reserved.</p>
        <p>123 Main Street, Cityville, State, 12345</p>
        <p>Phone: 123-456-7890 | Email: info@autoyard.com</p>
      </div>
    </footer>
  );
};

export default Footer;
