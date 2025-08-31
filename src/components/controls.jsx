import React from 'react';
import useStore from '../store';

function Controls(props) {
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div className="controls-container">
      <button type="button" onClick={increment} className="control-btn">+</button>
      <button type="button" onClick={decrement} className="control-btn">-</button>
    </div>
  );
}

export default Controls;