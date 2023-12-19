import React from "react";
import { useSelector } from "react-redux";
function ChildE() {
  const text = useSelector((state) => state.text);
  return (
    <div>
      <h5>This is component E</h5>
      <p>Value -&gt; {text}</p>
    </div>
  );
}

export default ChildE;
