import React from "react";
// import "./CompA.css";
function CompA(props) {
    console.log(props);
  return (
    <div>
      <button style={props.css}>Click me</button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
        pariatur.
      </p>
      <ol>
        <li>Imran</li>
        <li>Ritik</li>
        <li>Rajat</li>
        <li>Anshul</li>
      </ol>
    </div>
  );
}

export default CompA;
