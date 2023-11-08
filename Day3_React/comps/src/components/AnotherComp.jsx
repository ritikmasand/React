import React from "react";

function AnotherComp({ name, name2 }) {
  console.log(name);
  console.log(name2);
  return (
    <div>
      My name is {name}
      <br />I have another name {name2}
    </div>
  );
}

export default AnotherComp;
