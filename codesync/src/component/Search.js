import React from "react";
import { useRef } from "react";
function Search({ searchedUsername }) {
  const inputref = useRef();
  const searched = (e) => {
    e.preventDefault();
    const searchkeyword = inputref.current.value;
    // console.log(searchkeyword);
    searchedUsername(searchkeyword);
  };
  return (
    <div>
      <h1>Search for username</h1>
      <form onSubmit={searched}>
        <input type="text" ref={inputref} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
