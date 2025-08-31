import React from 'react';
import { useStore } from '../store/projectOneStore.js';

function ProjectOne() {
  const count = useStore(state => state.count);
  const increment = useStore(state => state.increment);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Project One: React + Zustand Counter</h2>
      <p>This demo shows a simple counter using Zustand for state management.</p>
      <div style={{ fontSize: '2rem', margin: '1rem 0' }}>{count}</div>
      <button onClick={increment} style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>Increment</button>
    </div>
  );
}

export default ProjectOne;
