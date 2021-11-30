import React from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);

  return (
    <div>
      {text} - {count}
    </div>
  );
}

// prevent unnecessary rendering
export default React.memo(Count);
