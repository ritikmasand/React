import React from "react";

function CompB(props) {
    props.fn()
  return (
    <div>
      <span>Hey This is component B</span>
      <hr />
      <br />
      <p className="imran">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus?
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

export default CompB;
