import { useState } from "react";

export default function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  );
}
// Important Rules of Hooks
// * Only Call Hooks on Top Level
//      -> Don´t call Hooks insede loops, conditions, or nested functions
// * Only Call Hooks from React Functions
//      -> Call them from React Functional components and not just any regular Javascript function
