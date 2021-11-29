import { useReducer } from "react";

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

export default function Counter01() {
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button onClick={() => dispatch("decrement")}>
        Descrement
      </button>
      <button onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}
