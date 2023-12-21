import logo from "./logo.svg";
import "./App.css";
import { Suspense, lazy, useState } from "react";
import { useMemo, useCallback } from "react";
// import Home from "";
const Home = lazy(() => import("./components/Home"));
const ChildA = lazy(() => import("./components/ChildA"));
function App() {
  // const [add, setadd] = useState(0);
  // const [minus, setminus] = useState(100);
  // const addition = () => {
  //   setadd(add + 1);
  // };

  // const learning = useCallback(() =>{
  //   console.log("learning");
  // },[add])
  // // const learning =
  // const substraction = () => {
  //   setminus(minus - 1);
  // };

  // const Multiplication = useMemo(function multiply() {
  //   console.log("multiply function has been called !!!!");
  //   return add * 10;
  // },[add]);

  return (
    <div className="App">
      <header>
        {/* <ChildA data={learning} />
        {add}
        <button onClick={addition}>Addition</button>
        <button onClick={substraction}>Minus</button>
        {minus} */}
        <Suspense fallback={<div>Please wait .....</div>}>
          <ChildA />
          <Home />
        </Suspense>
      </header>
    </div>
  );
}

// lazy loading

export default App;


// controlled and uncontrolled componets
// internet is connected ? 
// unmounting phase 

// IMDB  : Project