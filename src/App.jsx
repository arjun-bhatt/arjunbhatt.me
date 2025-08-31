import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import ProjectOne from './components/ProjectOne.jsx';
import ProjectTwo from './components/ProjectTwo.jsx';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

function App() {
  return (
    <Router>
      <div id="app-main">
        <nav id="main-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/project-one" className="nav-link">Project One</Link>
          <Link to="/project-two" className="nav-link">Project Two</Link>
          <Link to="http://www.whoiskp.me"> Project Three</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
          <Route path="wwww.whoiskp.me" />
          <Route path="*" element={FallBack} />
        </Routes>
      </div>
    </Router>
  );
}


// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// };


export default App;
