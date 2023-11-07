import logo from "./logo.svg";
import "./App.css";
import ExampleComp from "./compoents/ExampleComp";
import Examplecomp2 from "./compoents/Examplecomp2";

function App() {
  return (
    <div className="App">
      <header>
        <ExampleComp />
        <Examplecomp2/>
      </header>
    </div>
  );
}

export default App;
