import React from "react";
import ChildB from "./ChildB";
import ChildD from "./ChildD";

function ChildA({data}) {
//   var data = "magic data";
  return (
    <div>
      This is child A &gt; {data}
      <ChildB data={data}/>
    </div>
  );
}

export default ChildA;
