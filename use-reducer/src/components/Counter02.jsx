import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

// Reducer function receive a current state and returns a new state.
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter:
          currentState.firstCounter + action.value,
      }; // The new state
    case "decrement":
      return {
        ...currentState,
        firstCounter:
          currentState.firstCounter - action.value,
      }; // The new state
    case "increment2":
      return {
        ...currentState,
        secondCounter:
          currentState.secondCounter + action.value,
      }; // The new state
    case "decrement2":
      return {
        ...currentState,
        secondCounter:
          currentState.secondCounter - action.value,
      }; // The new state
    case "reset":
      return initialState; // The new state
    default:
      return currentState; // No changes
  }
};

export default function Counter02() {
  const [count, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <div>First Count - {count.firstCounter}</div>
      <div>Second Count - {count.secondCounter}</div>
      <button
        onClick={() =>
          dispatch({ type: "increment", value: 1 })
        }>
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrement", value: 1 })
        }>
        Descrement
      </button>
      <button
        onClick={() =>
          dispatch({ type: "increment", value: 5 })
        }>
        Increment 5
      </button>
      <button
        onClick={() =>
          dispatch({ type: "decrement", value: 5 })
        }>
        Descrement 5
      </button>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "increment2", value: 1 })
          }>
          Increment Second
        </button>
        <button
          onClick={() =>
            dispatch({ type: "decrement2", value: 1 })
          }>
          Descrement Second
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}
