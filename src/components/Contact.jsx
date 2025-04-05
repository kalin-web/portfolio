import React from 'react';
import '../styles/Contact.css';
import { portfolioData } from '../data/portfolioData';
import linkedinIcon from '../assets/linkedin.svg'
import gmailIcon from '../assets/gmail.svg'
import openNew from '../assets/open_in_new.svg'

const Contact = () => {
  return (
    <section className="contact">
      <h3 className="section-title contact-title">Contact me</h3>
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-text">
          Interested in working together or have any questions about my projects? Feel free to contact me through my email or professional networks.
          </p>
          
          <div className="contact-links">
            <a 
              href={`mailto:${portfolioData.contact.email}`} 
              className="contact-link email-link"
            >
              <img src={gmailIcon} alt="Gmail" className="social-icon-contact --gmail-icon" />
              {portfolioData.contact.email}
              <img src={openNew} alt="Gmail" className="open-new-tab" />
            </a>
            
            <a 
              href={portfolioData.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link linkedin-link"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon-contact" />
              LinkedIn
              <img src={openNew} alt="Gmail" className="open-new-tab" />
            </a>
            
            <a 
              href={portfolioData.contact.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link github-link"
            >
              <svg className='social-icon-contact' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
              <img src={openNew} alt="Gmail" className="open-new-tab" />
            </a>
          </div>
          
          <div className="availability-info">
            <p>
              <strong>Current availability:</strong> Open to new projects and job opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;