import { useEffect, useRef, useState } from "react";

export default function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    /* Can be used to generate a container to store a mutable value
     similar an instance props in class component. This container does not 
     cause re-rendering when a date stories changes. */
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button
        onClick={() => clearInterval(intervalRef.current)}>
        Clear Interval
      </button>
    </div>
  );
}
