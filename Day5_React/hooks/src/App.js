import logo from "./logo.svg";
import "./App.css";
// import { useTime } from "react-timer-hook";
import { useState } from "react";
import ToggleComp from "./components/ToggleComp";
function App() {
  // const time = useTime({ format: "12-hour" });
  let [count, setCount] = useState(0);
  //  console.log(time);
  // var counter = 0;
  const inc = () => {
    // console.log(counter);
    setCount((count += 1));
    console.log("component re-render");
  };
  const dec = () => {
    // console.log(counter);
    setCount(--count);
    console.log("component re-render");
  };

  //  console.log(counter);

  return (
    <div className="App">
      {/* <p>
          Time : {time.hours} : {time.minutes} : {time.seconds} {time.ampm}
        </p> */}
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>decrememt</button>
      <h3>{count}</h3>
      <ToggleComp />
    </div>
  );
}

export default App;
