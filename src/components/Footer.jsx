import React from 'react';
import '../styles/Footer.css';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;