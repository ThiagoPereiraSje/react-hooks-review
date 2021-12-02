import { useState } from "react";

export default function useCounter(
  initialState = 0,
  value = 1
) {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  const reset = () => {
    setCount(initialState);
  };

  return [count, increment, decrement, reset];
}
