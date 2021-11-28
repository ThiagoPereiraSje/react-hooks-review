import { useEffect, useState } from "react";

export default function HookCounterOne() {
  const [count, setCount] = useState(0);

  // Execute this function every time with component is render
  // After the first render and after any update
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // useEffect replaces: componentDidMount,
  //   componentDidUpdate and componentWillUnmount

  // useEffect runs after every render

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
