import React from "react";
import { useContext } from 'react'
import { contextMain } from "../contexts";
function CompE() {
    const data2 = useContext(contextMain)
  return (
    <div>
      <h2>Component E -&gt; {data2}</h2>
      {/* <contextMain.Consumer>
        {data =>{
            return(
                <span>{data}</span>
            )
        }}
      </contextMain.Consumer> */}
    </div>
  );
}

export default CompE;
