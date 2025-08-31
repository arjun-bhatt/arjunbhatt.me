import React from 'react';
// import { useStore } from '../store/projectOneStore.js';
import ReactNotesApp from '../ProjectOneReactNotes/components/reactNotesApp.jsx';

function ProjectOne() {
  // const count = useStore(state => state.count);
  // const increment = useStore(state => state.increment);

  return (
    <div id="project-one" className="page-container">
      <h2>Project One: React Notes</h2>
      <ReactNotesApp />
    </div>
  );
}

export default ProjectOne;
