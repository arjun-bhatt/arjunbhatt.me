import React from 'react';
import { useStore } from '../store/projectTwoStore.js';

function ProjectTwo() {
  const todos = useStore(state => state.todos);
  const addTodo = useStore(state => state.addTodo);

  const [input, setInput] = React.useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Project Two: Zustand Todo List</h2>
      <p>A simple todo list using Zustand for state management.</p>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add todo..." style={{ marginRight: '1rem' }} />
      <button onClick={() => { if(input) { addTodo(input); setInput(''); } }}>
        Add
      </button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectTwo;
