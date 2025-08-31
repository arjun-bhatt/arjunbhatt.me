import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ProjectOne from './components/ProjectOne.jsx';
import ProjectTwo from './components/ProjectTwo.jsx';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '1rem', color: '#fff' }}>About</Link>
        <Link to="/project-one" style={{ marginRight: '1rem', color: '#fff' }}>Project One</Link>
        <Link to="/project-two" style={{ color: '#fff' }}>Project Two</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project-one" element={<ProjectOne />} />
        <Route path="/project-two" element={<ProjectTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
