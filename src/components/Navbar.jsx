import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-links">
          <button 
            onClick={() => setActiveTab('about')}
            className={`navbar-link ${activeTab === 'about' ? 'active' : ''}`}
          >
            About me
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`navbar-link ${activeTab === 'projects' ? 'active' : ''}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            className={`navbar-link ${activeTab === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;