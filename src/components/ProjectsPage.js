import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectsPage.css';

const ProjectsPage = ({ projects }) => {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="more-opportunities">
        <a href="/more-opportunities" className="see-more-link">See more opportunities →</a>
      </div>
    </div>

  );
};

export default ProjectsPage;


