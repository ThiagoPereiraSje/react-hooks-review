import { useEffect, useState } from "react";

export default function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // This way effect runs after every update of any component
  // useEffect(() => {
  //   console.log("Updating document title!");
  //   document.title = `You clicked ${count} times`;
  // });

  // For conditionally execute a effect we passing a second parameter
  useEffect(() => {
    console.log("Updating document title!");
    document.title = `You clicked ${count} times`;
  }, [count]); // In this array we need the specify eder props or state we need watch for

  // In this example we need effect to be executed only when count value changes

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
