//https://codesandbox.io/p/sandbox/first-react-app-start-forked-7jkmnp?file=%2Fsrc%2FApp.js%3A91%2C1

import React from "react";

export const CounterContext = React.createContext({
  count: 0,
  incrementCounter: () => {},
  decrementCounter: () => {},
  resetCounter: () => {},
});

export function counterReducer(state, action) {
 switch (action.type) {
    case "INCREMENT":
      console.log("increment");
      return { count: state.count + 1 };
    case "DECREMENT":
      console.log("decrement");
      return { count: state.count - 1 };
    case "RESET":
      console.log("reset");
      return { count: 0 };
    default:
      console.log("default");
      return state;
  } 
}

export function CounterContextProvider({ children }) {
  const [counterState, counterDispatch] = React.useReducer(
    counterReducer, 
    { count: 0 }
  );

  const handleIncrement = () => {
    counterDispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    counterDispatch({
      type: "DECREMENT",
    });
  };

  const handleReset = () => {
    counterDispatch({
      type: "RESET",
    });
  };

  const ctxValue = {
    count: counterState.count,
    incrementCounter: handleIncrement,
    decrementCounter: handleDecrement,
    resetCounter: handleReset,
  };

  return (
    <CounterContext.Provider value={ctxValue}>
      {children}
    </CounterContext.Provider>
  );
}

function App() {
  const { count, incrementCounter, decrementCounter, resetCounter } =
    React.useContext(CounterContext);
  return (
    <CounterContextProvider id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </p>
      <p id="counter">{count}</p>
    </CounterContextProvider>
  );
}

export default App;
