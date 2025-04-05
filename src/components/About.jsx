import React from 'react';
import '../styles/About.css';
import { portfolioData } from '../data/portfolioData';
import RevealOnScroll from './RevealOnScroll'

const About = () => {

  return (
      <section className="about">
        <div className='section-container'>
          <h3 className="section-title">About Me</h3>
          <p className="about-text --about-text-first">{portfolioData.about}</p>
        </div>

        <div className="skills-container">
        <h4 className="skills-title">Skills</h4>
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
          ))}
        </div>

        <RevealOnScroll delay={0.05}>
          <div className='section-container'>
            <h4 className="section-title">My Experience</h4>
            <p className="about-text">{portfolioData.journey}</p>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.05}>
          <div className='section-container'>
            <h4 className="section-title">Interests and Availability</h4>
            <p className="about-text --about-text-interests">{portfolioData.interests}</p>
            <p className="about-text">{portfolioData.availability}</p>
          </div>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.05}>
        <div className='section-container'>
          <h4 className="section-title">Languages</h4>
          <ul className="about-text">
            {portfolioData.languages.map((language, index) => (
              <li key={index} className="language-item">{language}</li>
            ))}
          </ul>
        </div>
        </RevealOnScroll>
      </section>
  )
}

export default About;