import React from 'react';

const projects = [
  { name: 'Project One', path: '/project-one', description: 'A sample webapp using React and Zustand.' },
  { name: 'Project Two', path: '/project-two', description: 'Another demo webapp with state management.' }
];

function LandingPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to My Web Development Portfolio</h1>
      <p>Explore my projects below:</p>
      <ul>
        {projects.map(project => (
          <li key={project.name} style={{ marginBottom: '1rem' }}>
            <a href={project.path} style={{ fontSize: '1.2rem', color: '#007bff' }}>{project.name}</a>
            <div>{project.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
