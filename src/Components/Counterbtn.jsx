import React from 'react';
const CounterButtons = ({ dispatch }) => {
  return (
    <div className="button-group">
      <button className="counter-button" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button className="counter-button" onClick={() => dispatch({ type: 'decrement' })} style={{ margin: "0 10px" }}>
        Decrement
      </button>
      <button className="counter-button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default CounterButtons;
