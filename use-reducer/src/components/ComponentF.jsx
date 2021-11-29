import { useContext } from "react";
import { CounterContext } from "../App";

export default function ComponentF() {
  const { countState, countDispatch } =
    useContext(CounterContext);

  return (
    <div>
      F Count - {countState}
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
