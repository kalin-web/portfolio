import React from 'react';
import '../styles/Projects.css';
import { portfolioData } from '../data/portfolioData';
import RevealOnScroll from './RevealOnScroll';

const Projects = () => {
  return (
    <section className="projects">
      <p className='about-text --presentation-project'>{portfolioData.projects_presentation}</p>
      <h3 className="section-title">My Projects</h3>
      <div className="projects-grid">
        {portfolioData.projects.map((project) => (
          <RevealOnScroll delay={0.05}>
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder"><img src={project.imageUrl} alt='Project reference' /></div>
                <a className='image-link' href={project.link} target='_blank' rel='noopener noreferrer'><span className="visually-hidden">View project</span></a>
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <strong>Technologies:</strong> {project.technologies}
                </div>
              </div>
              <p className='project-date'>{project.date}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      <RevealOnScroll delay={0.05}>
        <h3 className='section-title --title-path'>Learning Path</h3>
        <p className='about-text'>{portfolioData.projects_focus}</p>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;