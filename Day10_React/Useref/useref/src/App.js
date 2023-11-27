import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
function App() {
  const inputRef = useRef();
  const Searched = (e) => {
    e.preventDefault();
    const typevalue = inputRef.current.value;
    console.log(typevalue);
  };
  return (
    <div className="App">
      <form onSubmit={Searched}>
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
}

export default App;
