import React from "react";

function ChildComponent({ onButtonClick }) {
  const handleclick = () => {
    const datatosend = "hello from childComponent";
    onButtonClick(datatosend)
  };

  return (
    <div>
      <button onClick={handleclick}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
