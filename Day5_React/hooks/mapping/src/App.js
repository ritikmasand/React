import logo from "./logo.svg";
import "./App.css";
import ColorContainer from "./ColorContainer";

function App() {
  const colours = ["red", "blue", "green", "purple", "yellow", "orange"];
  return (
    <div className="App">
      {/* <ColorContainer color="red" />
      <ColorContainer color="blue" />
      <ColorContainer color="green" />
      <ColorContainer color="purple" />
      <ColorContainer color="yellow" />
      <ColorContainer color="orange" /> */}
      {colours.map((element, idx) => {
        return <ColorContainer color={element} key={idx} />;
      })}
    </div>
  );
}

export default App;

// lifecycle
// useeffect
// project

// virtaul dom 
// router
// fragements
