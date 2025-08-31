import React from 'react';
import useStore from '../store';

function Counter(props) {

    // This means that this component will be rerendered when the store state.count state is updated,
    // but it will ignore any other data that wasn’t specified in this selector function.

  const count = useStore((state) => state.count);
  return (
    <div className="counter-container">
      Current Count: {count}
    </div>
  );
}

export default Counter;