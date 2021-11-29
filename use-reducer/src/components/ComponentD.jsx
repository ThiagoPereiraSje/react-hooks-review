import { useContext } from "react";
import { CounterContext } from "../App";

export default function ComponentD() {
  const { countState, countDispatch } =
    useContext(CounterContext);

  return (
    <div>
      D Count - {countState}
      <button onClick={() => countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countDispatch("decrement")}>
        Descrement
      </button>
      <button onClick={() => countDispatch("reset")}>
        Reset
      </button>
    </div>
  );
}
