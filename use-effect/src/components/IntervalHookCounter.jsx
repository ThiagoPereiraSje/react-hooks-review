import { useEffect, useState } from "react";

export default function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // For multiple effects everyone must be specified inside a specific useEffect
  // Ex.:
  //   useEffect(() => {
  //     // fetching data
  //   })
  //   useEffect(() => {
  //     // document.title = `You clicke ${count} times`
  //   })

  return <div>{count}</div>;
}
