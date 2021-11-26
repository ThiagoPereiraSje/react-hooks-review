import { useState } from "react";

export default function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  // Is not the right way to change the counter value
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  };

  // to fix this we need to use the second form of the setCount function
  const incrementFive2 = () => {
    for (let i = 0; i < 5; i++) {
      // is the most save way to change count value
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>
        Reset
      </button>
      {/* 
      Is not the better way to change count value
      
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button> 

      */}
      <button
        onClick={() =>
          setCount((prevCount) => prevCount + 1)
        }>
        Increment
      </button>
      <button
        onClick={() =>
          setCount((prevCount) => prevCount - 1)
        }>
        Decrement
      </button>
      <button onClick={incrementFive2}>Increment 5</button>
    </div>
  );
}
