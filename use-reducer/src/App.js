import React, { useReducer } from "react";
// import Counter01 from "./components/Counter01";
// import Counter02 from "./components/Counter02";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
// import Counter03 from "./components/Counter03";

const initialState = 0;

// Reducer function receive a current state and returns a new state.
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1; // The new state
    case "decrement":
      return currentState - 1; // The new state
    case "reset":
      return initialState; // The new state
    default:
      return currentState; // No changes
  }
};

export const CounterContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <CounterContext.Provider
      value={{
        countState: count,
        countDispatch: dispatch,
      }}>
      <div>
        Count - {count}
        {/* <Counter01 /> */}
        {/* <Counter02 /> */}
        {/* <Counter03 /> */}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
