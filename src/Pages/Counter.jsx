import React, { useReducer } from "react";
import CounterDisplay from '../Components/CounterDisplay';
import CounterButtons from '../Components/Counterbtn';
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

const CounterApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-app">
      <h1>Counter App using useReducer</h1>
      <CounterDisplay count={state.count} />
      <CounterButtons dispatch={dispatch} />
    </div>
  );
}

export default CounterApp;
