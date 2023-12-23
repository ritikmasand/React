import React from "react";
import { useRef } from "react";
function Uncontrolled() {
  const inputRef = useRef(null);
  const handleClick = () => {
    alert(`The input :${inputRef.current.value}`);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}

export default Uncontrolled;
