import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
   const clicked = ()=>{
    navigate("/page1")
   }
  return (
    <div>
      <Link to="/page1">Page1</Link>
      <hr />
      <Link to="/page2">Page2</Link>
      <hr />
      <Link to="/page3">Page3</Link>
      <hr />
      <button onClick={clicked}>page2</button>
    </div>
  );
}

export default Nav;
