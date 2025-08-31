import React from 'react';
import { useStore } from '../store/projectTwoStore.js';

function ProjectTwo() {
  const todos = useStore(state => state.todos);
  const addTodo = useStore(state => state.addTodo);

  const [input, setInput] = React.useState('');

  return (
    <div id="project-two" className="page-container">
      <h2>Project Two: Zustand Todo List</h2>
      <p>A simple todo list using Zustand for state management.</p>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add todo..." className="todo-input" />
      <button onClick={() => { if(input) { addTodo(input); setInput(''); } }} className="todo-add-btn">
        Add
      </button>
      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li key={idx} className="todo-list-item">{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectTwo;
