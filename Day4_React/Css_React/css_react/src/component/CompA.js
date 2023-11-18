import React from "react";
// import "./CompA.css";
function CompA({css}) {
    console.log(props);
  return (
    <div>
      <button style={css}>Click me</button>
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

