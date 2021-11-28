import { useEffect, useState } from "react";

export default function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    // cleanup function (similar to componentWillUnmount)
    return () => {
      console.log("Component unmounting code");

      window.removeEventListener(
        "mousemove",
        logMousePosition
      );
    };
  }, []); // Execute only once (similar to componentDidMount)

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}
