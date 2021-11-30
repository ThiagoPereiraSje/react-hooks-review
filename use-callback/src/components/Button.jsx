import React from "react";

function Button({ handleClick, children }) {
  console.log(`Rendering ${children}`);

  return <button onClick={handleClick}>{children}</button>;
}

// prevent unnecessary rendering
export default React.memo(Button);
