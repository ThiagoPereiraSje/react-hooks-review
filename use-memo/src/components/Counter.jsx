import { useMemo, useState } from "react";

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  // Prevent the isEven function running unnecessarily
  // Ex.: When re-rendering CountTwo
  const isEven = useMemo(() => {
    let i = 0;

    while (i < 2000000000) {
      i++;
    }

    return countOne % 2 === 0;
  }, [countOne]); // Cache the result

  return (
    <div>
      <div>
        <button onClick={incrementOne}>
          Count One - {countOne}
        </button>

        {/* Is event is not a function any more, now is a value */}
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>
          Count Two - {countTwo}
        </button>
      </div>
    </div>
  );
}

export default Counter;
