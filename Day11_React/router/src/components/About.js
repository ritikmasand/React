import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      This is about us page
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <a href="/nav">
        <button>Nav</button>
      </a>

    </div>
  );
}

export default About;
