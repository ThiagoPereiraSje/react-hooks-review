import useCounter from "../hooks/useCounter";

export default function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(
    5,
    2
  );

  return (
    <div>
      Counter - {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Descrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
