import logo from "./logo.svg";
import "./App.css";
import CompA from "./component/CompA";
import CompB from "./component/CompB";
function App() {
  const css = {
    backgroundColor: "violet",
    color: "#3a246d",
  };
  const fn = () => {
    alert("function called");
  };
  return (
    <div className="App">
      <header>
        <CompA css={css}  css2={css2}/>
        <CompB fn={fn} />
      </header>
    </div>
  );
}

export default App;
