import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ProjectOne from './components/ProjectOne.jsx';
import ProjectTwo from './components/ProjectTwo.jsx';

function App() {
  return (
    <Router>
      <div id="app-main">
        <nav id="main-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/project-one" className="nav-link">Project One</Link>
          <Link to="/project-two" className="nav-link">Project Two</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
