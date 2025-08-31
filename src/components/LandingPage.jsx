import React from 'react';

const projects = [
  { name: 'Project One', path: '/project-one', description: 'A sample webapp using React and Zustand.' },
  { name: 'Project Two', path: '/project-two', description: 'Another demo webapp with state management.' }
];

function LandingPage() {
  return (
    <div id="landing-page" className="page-container">
      <h1>Welcome to My Web Development Portfolio</h1>
      <p>Explore my projects below:</p>
      <ul>
        {projects.map(project => (
          <li key={project.name} className="project-list-item">
            <a href={project.path} className="project-link">{project.name}</a>
            <div className="project-description">{project.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
