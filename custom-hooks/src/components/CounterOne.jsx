import useCounter from "../hooks/useCounter";

export default function CounterOne() {
  const [count, increment, decrement, reset] =
    useCounter(0);

  return (
    <div>
      Counter - {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Descrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
