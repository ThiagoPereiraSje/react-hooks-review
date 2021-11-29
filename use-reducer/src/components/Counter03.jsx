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

export default function Counter03() {
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [count2, dispatch2] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <div>First Count - {count}</div>
      <button onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button onClick={() => dispatch("decrement")}>
        Descrement
      </button>
      <button onClick={() => dispatch("reset")}>
        Reset
      </button>

      <div>
        <div>Second Count - {count2}</div>
        <button onClick={() => dispatch2("increment")}>
          Increment 2
        </button>
        <button onClick={() => dispatch2("decrement")}>
          Descrement 2
        </button>
        <button onClick={() => dispatch2("reset")}>
          Reset 2
        </button>
      </div>
    </div>
  );
}
